import React, { useState } from 'react'
import HardCopy from '../../components/LegalForm/HardCopy'
import QCss from './Questionaires.module.scss'
import Logo from '../../components/NavBar/Logo'
import { useDispatch, useSelector } from 'react-redux'
import Preview from '../../components/Preview/Preview'
import {
  addingCartItem,
  savingFormInState,
  savingFormToApiAction,
} from '../../redux/data/data.action'
import { currentUserSelector } from '../../redux/user/user.selector'
import { useHistory } from 'react-router'
import NewForm from '../../components/LegalForm/NewForm'
import update from 'react-addons-update' // ES6
import $ from 'jquery'
// import { pdfFromReact } from 'generate-pdf-from-react-html'
import Skeleton from 'react-loading-skeleton'
import { InsideSpinner } from '../../components/Spinner/Spinner'

const Questionaires = ({ formSelector }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => currentUserSelector(state))
  const [currentForm, setcurrentForm] = useState(formSelector)
  const [toggle, settoggle] = useState(false)

  const total_pages = formSelector ? formSelector.pages.length : 4

  const [state, setstate] = useState({
    // percent: 100 / total_pages,
    percent: 0,
    currentPage: 0,
  })
  console.log(formSelector)
  React.useEffect(() => {
    setcurrentForm(formSelector)
  }, [formSelector])
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(savingFormInState(currentForm))
  }, [dispatch, currentForm])

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
  const submitForm = () => {
    dispatch(addingCartItem(currentForm))
    if (currentUser) {
      dispatch(savingFormToApiAction({ id: currentUser.id, form: currentForm }))
      if (currentUser.subscription_plan) {
        history.push('/checkout')
      } else history.push('/plans?cart=form')
    } else {
      history.push('/register?redirect=plans')
    }
  }
  const pageHandler = (currentPage) => {
    setstate({
      percent: state.percent - 100 / total_pages,
      currentPage,
    })
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
        {/* Progress Bar */}
        <div className={QCss.progress_bar}>
          <div
            className={QCss.progress_complete}
            style={{ width: `${state.percent}%` }}
          ></div>
        </div>
        <div className={QCss.progress_percent}>
          {Math.floor(state.percent)}% Complete
        </div>
        {/* Progress Bar */}
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
    </div>
  )
}

const formSkeleton = () => {
  return <div></div>
}
export default Questionaires
