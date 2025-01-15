/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@pavelglaz/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class NotFoundError extends ApiError {
    constructor(message = 'Not found', processCode?: number, type?: ErrorType) {
        super(message, HttpStatusCode.NOT_FOUND, {}, processCode, type)
    }
}
