<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Models\User;
use App\Models\LegalForm;
use App\Models\LegalFormPage;
use App\Models\LegalFormPageQuestion;
use App\Models\UserLegalForm;
use App\Models\UserLegalFormAnswer;


class LegalFormApiController extends Controller
{
	private $req;

	function __construct(Request $req)
	{
		$this->req = $req;
	}

	public function getAllForms()
	{
		$forms = LegalForm::latest()->get();

		return json_encode(array("status"=>true, "data"=>$forms));
	}


	public function getLegalForm($id)
	{
		$form = LegalForm::where('id', $id)->with('pages', 'pages.questions')->get()->toArray();
		
		if (count($form) > 0) {
			return json_encode($form[0]);
			return json_encode(array("status"=>true, "data"=>$form[0]));
		}
		return json_encode(array("status"=>false, "msg"=>'no data found'));
	}


	public function submitLegalForm()
	{
		$validator = Validator::make($this->req->all(), [
			'user_id' => 'required',
			'form' => 'required',
		]);

		if ($validator->fails()) {
			return json_encode(array("status"=>false, "errors"=>$validator->errors()));
		}

		// $form_data = (object)$this->req->form[0];
		$form_data = json_encode($this->req->form[0]);
		$form_data = json_decode($form_data);
		return $form_data->pages[0]->id;
		return $this->req->form[0];
		return $this->req->form->id;


		$user_legal_form = new UserLegalForm;
		$user_legal_form->user_id = $this->req->user_id;
		$user_legal_form->legal_form_id = $form_data->id;
		$user_legal_form->title = $form_data->title;
		$user_legal_form->comment = $this->req->comment ?? '';
		$user_legal_form->description = $this->req->description ?? '';

		$user_legal_form->save();

		foreach ($form_data->pages as $page) {
			foreach ($page->questions as $ques) {
				$answer = new UserLegalFormAnswer;

				$answer->user_legal_form_id = $user_legal_form->id;
				$answer->ques_id = $ques->id;
				$answer->value = $ques->value;

				$answer->save();
			}
		}

		return json_encode(array("status" => false, "msg" => 'Your form has been submitted.'));
	}



	public function AddNewLegalForm()
	{

		$legalForm = new LegalForm;
		$legalForm->title = $this->req->title;
		$legalForm->description = $this->req->description ?? '';
		$legalForm->save();
		
		$pages = json_decode(json_encode($this->req->pages));
		// return print_r($pages[0]->title);
		$page_id = array();
		foreach (@$pages as $page) {
			$legalFormPage = new LegalFormPage;
			$legalFormPage->legal_form_id = $legalForm->id;
			$legalFormPage->title = $page->title;
			$legalFormPage->description = $page->description;

			$legalFormPage->save();

			$questions = json_decode(json_encode($page->questions));
			
			$page_id[] = $legalFormPage->id;
			foreach (@$questions as $ques) {
				$legalFormPageQuestion = new LegalFormPageQuestion;
				$legalFormPageQuestion->legal_form_page_id = $legalFormPage->id;
				$legalFormPageQuestion->label = $ques->label;
				$legalFormPageQuestion->name = $ques->name;
				$legalFormPageQuestion->type = $ques->type;
				$legalFormPageQuestion->placeholder = $ques->placeholder;
				$legalFormPageQuestion->value = $ques->value ?? '';

				$parent_ques = LegalFormPageQuestion::where('name', $ques->parent_name)->whereIn('legal_form_page_id', $page_id)->first();

				$legalFormPageQuestion->parent_id = $parent_ques ? $parent_ques->id : null;
				$legalFormPageQuestion->parent_value = $ques->parent_value ?? null;

				$legalFormPageQuestion->save();                
			}
		}

		return json_encode(array("status" => true,"msg" => "Legal Form Saved successfully"));
	}



}
