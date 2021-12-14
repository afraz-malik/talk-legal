import React, { useState, useEffect } from 'react'
import HardCopy from '../../components/LegalForm/HardCopy'
import QCss from './Questionaires.module.scss'
import Logo from '../../components/NavBar/Logo'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearForm,
  clearingCart,
  gettingFormStart,
} from '../../redux/data/data.action'

import Preview from '../../components/Preview/Preview'
import {
  addingCartItem,
  savingFormInState,
  savingFormToApiAction,
} from '../../redux/data/data.action'
import { currentUserSelector } from '../../redux/user/user.selector'
import { useHistory, useLocation } from 'react-router'
import NewForm from '../../components/LegalForm/NewForm'
import update from 'react-addons-update' // ES6
import $ from 'jquery'
// import { pdfFromReact } from 'generate-pdf-from-react-html'
import Skeleton from 'react-loading-skeleton'
import { InsideSpinner, Spinner } from '../../components/Spinner/Spinner'
import { currentFormSelector } from '../../redux/data/data.selector'
import { toast } from 'react-toastify'
import { fetchDbPost } from '../../backend/backend'

const Questionaires = ({}) => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => currentUserSelector(state))
  const formSelector = useSelector((state) => currentFormSelector(state))
  const token = useSelector((state) => state.userReducer.token)
  const [currentForm, setcurrentForm] = useState(formSelector)
  const [toggle, settoggle] = useState(false)
  const [loading, setloading] = useState(false)
  const total_pages = formSelector ? formSelector.pages.length : 4
  const formId = location.search ? location.search.split('=')[1] : null

  const [state, setstate] = useState({
    // percent: 100 / total_pages,
    percent: 0,
    currentPage: 0,
  })

  useEffect(() => {
    if (currentForm && currentForm.id == formId) {
      console.log('Same form')
    } else {
      if (formId) {
        dispatch(clearForm())
        dispatch(gettingFormStart(formId))
      } else {
        history.push('/business')
      }
    }
  }, [])

  useEffect(() => {
    setcurrentForm(formSelector)
  }, [formSelector])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (currentForm && currentForm.id == formId) {
      dispatch(savingFormInState(currentForm))
    }
  }, [currentForm])

  const handleForm = (page, data) => {
    if (page < total_pages) {
      setcurrentForm(
        update(currentForm, {
          pages: {
            [page]: {
              $set: {
                ...currentForm.pages[page],
                questions: [...data],
              },
            },
          },
        })
      )
      // Handle Percent and Page
      if (page < total_pages - 1) {
        setstate({
          percent: state.percent + 100 / total_pages,
          currentPage: state.currentPage + 1,
        })
      }
      // Complete percent on Preview
      if (page === total_pages - 1 && state.percent < 100) {
        setstate({
          ...state,
          percent: 100,
          // percent: state.percent + 100 / total_pages,
        })
      }
    }
  }
  const pageHandler = (currentPage) => {
    setstate({
      percent: state.percent - 100 / total_pages,
      currentPage,
    })
  }
  const submitForm = async () => {
    dispatch(addingCartItem(currentForm))
    if (currentUser) {
      // dispatch(savingFormToApiAction({ id: currentUser.id, form: currentForm }))
      try {
        setloading(true)
        const response = await fetchDbPost(
          `api/user/submit-legal-form`,
          // response.access_token.accessToken.plainTextToken,
          token,
          currentForm
        )
        if (response.status) {
          // await put(addingCartItemSuccess(response.user_legal_form))
          console.log(response)
          dispatch(addingCartItem(response.user_legal_form))
          if (
            currentUser.subscription_plan &&
            response.user_legal_form.status === '2'
          ) {
            setloading(false)
            toast.success(response.msg)
            dispatch(clearingCart())
            history.push('/dashboard')
          } else history.push('/plans?cart=form')
        } else {
          throw Error(response.msg)
        }
        // yield refreshingUser(uid, token, false)
      } catch (e) {
        console.log(e)
        setloading(false)
        toast.error(e)
      }
    } else {
      history.push('/register?redirect=plans')
    }
  }

  const clickEvent = (e) => {
    var preview = document.getElementById('preview')
    if (preview && !preview.contains(e.target)) {
      settoggle(false)
    }
  }
  if (toggle) {
    window.addEventListener('mouseup', clickEvent)
    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        settoggle(false)
      }
    })
  } else {
    window.removeEventListener('mouseup', clickEvent)
  }

  return (
    <div className={QCss.container}>
      <div className={QCss.container2}>
        <Logo />
        <ProgressBar state={state} />
        <div className={QCss.body}>
          <div className={QCss.form}>
            {currentForm ? (
              <NewForm
                newForm={currentForm.pages[state.currentPage]}
                currentForm={currentForm}
                handleForm={handleForm}
                pageHandler={pageHandler}
                currentPage={state.currentPage}
                submitForm={submitForm}
                lastPage={state.currentPage === total_pages - 1 ? true : false}
                settoggle={settoggle}
              />
            ) : (
              <>
                <Skeleton count={1} height={50} />
                <br />
                <br />
                <br />
                <br />
                <Skeleton count={1} height={30} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Skeleton count={1} height={50} />
              </>
            )}
          </div>
          <div
            className={QCss.hardCopy}
            style={{
              backgroundImage: 'url(images/TLTM.png)',
            }}
          >
            <div className={QCss.content} id="form">
              {formSelector && currentForm ? (
                <HardCopy values={currentForm} currentForm={formSelector} />
              ) : (
                <InsideSpinner />
              )}
            </div>
          </div>
        </div>
      </div>
      <img alt="" className={QCss.jellyimg} src="images/jelly.png" />
      {toggle ? (
        <Preview position="fixed">
          <div
            className={`${QCss.hc} preview`}
            id="preview"
            style={{
              backgroundImage: 'url(images/TLTM.png)',
            }}
          >
            <img
              className={QCss.hcimg}
              alt=""
              src="images/x-circle.png"
              onClick={() => settoggle(false)}
            />
            {/* <button
              onClick={() => pdfFromReact('#new', 'My-file', 'p', true, true)}
            >
              Downlaods
            </button> */}
            <div id="new">
              {formSelector && currentForm ? (
                <HardCopy values={currentForm} currentForm={formSelector} />
              ) : (
                <InsideSpinner />
              )}
            </div>
          </div>
        </Preview>
      ) : null}
      {loading ? <Spinner /> : null}
    </div>
  )
}

const ProgressBar = ({ state }) => {
  return (
    <>
      <div className={QCss.progress_bar}>
        <div
          className={QCss.progress_complete}
          style={{ width: `${state.percent}%` }}
        ></div>
      </div>
      <div className={QCss.progress_percent}>
        {Math.floor(state.percent)}% Complete
      </div>
    </>
  )
}
export default Questionaires
