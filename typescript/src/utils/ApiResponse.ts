class ApiResponse<T> {
    constructor(
        public readonly statusCode: number,
        public readonly data: T,
        public readonly message = "Success"
    ) {}

    public readonly success = this.statusCode < 400;
}

export default ApiResponse;