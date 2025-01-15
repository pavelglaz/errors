export interface ErrorData {
    processCode?: number
    code?: number
    errors?: unknown
    // eslint-disable-next-line @typescript-eslint/member-ordering
    [key: string]: unknown
}
