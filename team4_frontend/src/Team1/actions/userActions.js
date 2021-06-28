import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,

  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_FAIL,
  // USER_UPDATE_PROFILE_RESET,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:4000/api/users/login',
      { email, password },
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

//register a new User
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:4000/api/users/',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`http://localhost:4000/api/users/${id}`, config)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })

    const { userLogin: { userInfo }, } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    //user is the data we need to update with
    const { data } = await axios.put(`http://localhost:4000/api/users/profile`, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo' ,JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}


export const clearErrors = () => async (dispatch) => {
  dispatch({
      type: CLEAR_ERRORS
  })
}

export const forgotPassword = (email) => async (dispatch) => {
  console.log("Email",email)
  // const mail=email.get("email")
  try {

      dispatch({ type: FORGOT_PASSWORD_REQUEST })

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }


      const { data } = await axios.post('/api/users/forgotPassword',{ email}, config)

      dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: data.message
      })

  } catch (error) {
      dispatch({
          type: FORGOT_PASSWORD_FAIL,
          payload: error.response.data.message
      })
  }
}

/*
Reset password
*/ 
export const resetPassword = (token, password,confirmPassword) => async (dispatch) => {
  try {

      dispatch({ type: NEW_PASSWORD_REQUEST })

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }

      const { data } = await axios.put(`/api/users/resetPassword/${token}`, {password,confirmPassword}, config)

      dispatch({
          type: NEW_PASSWORD_SUCCESS,
          payload: data.success
      })

  } catch (error) {
      dispatch({
          type: NEW_PASSWORD_FAIL,
          payload: error.response.data.message
      })
  }
}

