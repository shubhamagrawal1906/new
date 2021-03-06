'use strict'
exports.ERROR = {
    USER_ALREADY_REGISTERED : {
        statusCode:401,
        customMessage : 'User already exists.',
        type : 'USER_ALREADY_REGISTERED'
    },
      ERROR_IN_QUERY : {
        statusCode:401,
        customMessage : 'Error in query',
        type : 'ERROR_IN_QUERY'
    },
    INVALID_USERNAME : {
        statusCode: 401,
        customMessage: 'This user name is not associated with any account.',
        type: 'INVALID_USERNAME'
    },
    INVALID_CREDENTIALS : {
        statusCode: 401,
        customMessage: 'Oops! The Password is incorrect.',
        type: 'INVALID_CREDENTIALS'
    },
    INVALID_PARAMETER : {
        statusCode: 401,
        customMessage: 'please provide valid parameter.',
        type: 'INVALID_PARAMETER'
    },
    TASK_ALREADY_EXIST : {
        statusCode: 401,
        customMessage: 'Task Stage already exist with same name.',
        type: 'INVALID_TASK_STAGE'
    },
    USER_TASK_ALREADY_EXIST : {
        statusCode: 401,
        customMessage: 'Task already exist with same name.',
        type: 'INVALID_TASK_NAME'
    },
    USER_NOT_FOUND : {
        statusCode: 401,
        customMessage: 'Not able to found all user details.',
        type: 'USER_DETAILS_NOT_FOUND'
    },
    USER_NOT_BELONG : {
        statusCode: 401,
        customMessage: 'Particular task is not belong to given user',
        type: 'USER_NOT_BELONG'
    },
    STAGE_NOT_CHANGE : {
        statusCode: 401,
        customMessage: 'there is some problem to update stage',
        type: 'STAGE_NOT_CHANGE'
    },
    ERROR_GET_STAGE : {
        statusCode: 401,
        customMessage: 'there is some problem to fetch all stage',
        type: 'ERROR_GET_STAGE'
    },
    ERROR_GET_TASK : {
        statusCode: 401,
        customMessage: 'There is some problem to fetch all tasks',
        type: 'ERROR_GET_TASKS'
    },
    CAN_NOT_CREATED_SUB_TASK : {
        statusCode: 401,
        customMessage: 'There is some problem to creating sub task',
        type: 'CAN_NOT_CREATED_SUB_TASK'
    },
    CHILD_TASK_EXIST : {
        statusCode: 401,
        customMessage: 'Child of particular task exist',
        type: 'CHILD_TASK_EXIST'
    },
    CHANGING_TO_SAME_STATE : {
        statusCode: 401,
        customMessage: 'Task already on same state',
        type: 'CHANGING_TO_SAME_STATE'
    },
} 



exports.SUCCESS = {
    REGISTERED: {
        statusCode: 201,
        customMessage: 'Registered Successfully',
        type: 'REGISTERED'
    },
    LOGGED_IN : {
        statusCode: 200,
        customMessage: 'Logged In Successfully.',
        type: 'LOGGED_IN'
    },
    TASK_STAGE_CREATED : {
        statusCode: 201,
        customMessage: 'Task Stage Created.',
        type: 'TASK_STAGE_CREATED'
    },
    UPDATED_SUCCESSFULLY: {
        statusCode: 201,
        customMessage: 'Task Stage Updated Successfully.',
        type: 'UPDATED_SUCCESSFULLY'
    },
    TASK_CREATED : {
        statusCode: 201,
        customMessage: 'Task Created.',
        type: 'TASK_CREATED'
    },
    USER_FOUND : {
        statusCode: 200,
        customMessage: 'User Details Found.',
        type: 'USER_DETAILS_FOUND'
    },
    STAGE_CHANGED : {
        statusCode: 200,
        customMessage: 'Task Stage Changed.',
        type: 'STAGE_CHANGED'
    },
    GOT_TASK_STAGE : {
        statusCode: 200,
        customMessage: 'Fetch all stage.',
        type: 'GOT_TASK_STAGE'
    },
    GOT_TASKS : {
        statusCode: 200,
        customMessage: 'Fetch all tasks.',
        type: 'GOT_TASKS'
    },
    SUB_TASK_CREATED : {
        statusCode: 201,
        customMessage: 'Sub Task Created.',
        type: 'SUB_TASK_CREATED'
    },
}