<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Models\LegalForm;
use App\Models\LegalFormPage;
use App\Models\LegalFormPageQuestion;


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
            return json_encode(array("status"=>true, "data"=>$form[0]));
        }
        return json_encode(array("status"=>false, "msg"=>'no data found'));
    }



    public function AddNewLegalForm()
    {

        // return json_encode($this->req->all());
        /*$this->req->validate([
            "title" => "required",
        ]);*/


        $legalForm = new LegalForm;
        $legalForm->title = $this->req->title;
        $legalForm->description = $this->req->description ?? '';
        $legalForm->save();
        
        $pages = json_decode(json_encode($this->req->pages));
        // return print_r($pages[0]->title);
        foreach (@$pages as $page) {
            $legalFormPage = new LegalFormPage;
            $legalFormPage->legal_form_id = $legalForm->id;
            $legalFormPage->title = $page->title;
            $legalFormPage->description = $page->description;

            $legalFormPage->save();

            $questions = json_decode(json_encode($page->questions));
            
            foreach (@$questions as $ques) {
                $legalFormPageQuestion = new LegalFormPageQuestion;
                $legalFormPageQuestion->legal_form_page_id = $legalFormPage->id;
                $legalFormPageQuestion->label = $ques->label;
                $legalFormPageQuestion->name = $ques->name;
                $legalFormPageQuestion->type = $ques->type;
                $legalFormPageQuestion->placeholder = $ques->placeholder;
                $legalFormPageQuestion->value = $ques->value ?? '';

                $legalFormPageQuestion->save();                
            }
        }

        return json_encode(array("status" => true,"msg" => "Legal Form Saved successfully"));
    }



}
