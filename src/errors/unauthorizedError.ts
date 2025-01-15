/* eslint-disable unicorn/custom-error-definition */
import { HttpStatusCode } from '@pavelglaz/types'

import { ErrorType } from '../interfaces'

import { ApiError } from './apiError'

export class UnauthorizedError extends ApiError {
    constructor(message?: string, processCode?: number, type?: ErrorType) {
        super(message || 'Not authorized', HttpStatusCode.UNAUTHORIZED, {}, processCode, type)
    }
}
