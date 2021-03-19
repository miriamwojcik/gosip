'use strict'
/**
 Code from lab 6 available on Moodle
Error handling for Mongoose
*/
const getUniqueErrorMessage = (err) => {
    var output
    try {
    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2,
   err.message.lastIndexOf('_1'))
    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists'
    } catch (ex) {
    output = 'Unique field already exists'
    }
    return output
   }
   /**
   * Get the error message from error object
   */
   const getErrorMessage = (err) => {
    var message = ''
    if (err.code) {
    switch (err.code) {
    case 11000:
    case 11001:
    message = getUniqueErrorMessage(err)
    break
    default:
    message = 'Something went wrong'
    }
    } else {
    for (let errName in err.errors) {
    if (err.errors[errName].message) message = err.errors[errName].message
    }
    }
    return message
   }
   export default {getErrorMessage}