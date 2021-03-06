﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

// NOTE: changes from autogen:
// - replaced for of loops with for in loops (some babel problem)
// - added credentials: include to fetch requests (for cross site api authentication cookies)
// - EntityOfGuid: allowed id to also be undefined to support Add requests

export class AccountClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    login(email: string | null | undefined, password: string | null | undefined): Promise<Result> {
        let url_ = this.baseUrl + "/Account/Login?";
        if (email !== undefined)
            url_ += "email=" + encodeURIComponent("" + email) + "&"; 
        if (password !== undefined)
            url_ += "password=" + encodeURIComponent("" + password) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLogin(_response);
        });
    }

    protected processLogin(response: Response): Promise<Result> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Result>(<any>null);
    }

    register(email: string | null | undefined, password: string | null | undefined): Promise<Result> {
        let url_ = this.baseUrl + "/Account/Register?";
        if (email !== undefined)
            url_ += "Email=" + encodeURIComponent("" + email) + "&"; 
        if (password !== undefined)
            url_ += "Password=" + encodeURIComponent("" + password) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegister(_response);
        });
    }

    protected processRegister(response: Response): Promise<Result> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Result>(<any>null);
    }

    logOff(): Promise<void> {
        let url_ = this.baseUrl + "/Account/LogOff";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLogOff(_response);
        });
    }

    protected processLogOff(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    getCurrentUserId(): Promise<string> {
        let url_ = this.baseUrl + "/Account/GetCurrentUserId";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetCurrentUserId(_response);
        });
    }

    protected processGetCurrentUserId(response: Response): Promise<string> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<string>(<any>null);
    }
}

export class ToDoClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    add(toDo: ToDoItem): Promise<ResultOfGuid> {
        let url_ = this.baseUrl + "/ToDo/Add";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(toDo);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAdd(_response);
        });
    }

    protected processAdd(response: Response): Promise<ResultOfGuid> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ResultOfGuid.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ResultOfGuid>(<any>null);
    }

    update(toDo: ToDoItem): Promise<Result> {
        let url_ = this.baseUrl + "/ToDo/Update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(toDo);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdate(_response);
        });
    }

    protected processUpdate(response: Response): Promise<Result> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Result>(<any>null);
    }

    getForUser(userId: string | undefined): Promise<ToDoItem[]> {
        let url_ = this.baseUrl + "/ToDo/GetForUser?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetForUser(_response);
        });
    }

    protected processGetForUser(response: Response): Promise<ToDoItem[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let i in resultData200)
                    result200!.push(ToDoItem.fromJS(resultData200[i]));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ToDoItem[]>(<any>null);
    }

    delete(id: string | undefined): Promise<void> {
        let url_ = this.baseUrl + "/ToDo/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
            },
            credentials: 'include'
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDelete(_response);
        });
    }

    protected processDelete(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

export class Result implements IResult {
    success!: boolean;
    errors?: ErrorDto[] | undefined;
    failure!: boolean;

    constructor(data?: IResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.success = _data["success"];
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let i in _data["errors"])
                    this.errors!.push(ErrorDto.fromJS(_data["errors"][i]));
            }
            this.failure = _data["failure"];
        }
    }

    static fromJS(data: any): Result {
        data = typeof data === 'object' ? data : {};
        let result = new Result();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let i in this.errors)
                data["errors"].push(this.errors[i].toJSON());
        }
        data["failure"] = this.failure;
        return data; 
    }
}

export interface IResult {
    success: boolean;
    errors?: ErrorDto[] | undefined;
    failure: boolean;
}

export class ErrorDto implements IErrorDto {
    key?: string | undefined;
    message?: string | undefined;

    constructor(data?: IErrorDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.key = _data["key"];
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): ErrorDto {
        data = typeof data === 'object' ? data : {};
        let result = new ErrorDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["key"] = this.key;
        data["message"] = this.message;
        return data; 
    }
}

export interface IErrorDto {
    key?: string | undefined;
    message?: string | undefined;
}

export class ResultOfGuid extends Result implements IResultOfGuid {
    value!: string;

    constructor(data?: IResultOfGuid) {
        super(data);
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.value = _data["value"];
        }
    }

    static fromJS(data: any): ResultOfGuid {
        data = typeof data === 'object' ? data : {};
        let result = new ResultOfGuid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["value"] = this.value;
        super.toJSON(data);
        return data; 
    }
}

export interface IResultOfGuid extends IResult {
    value: string;
}

export class EntityOfGuid implements IEntityOfGuid {
    id!: string;

    constructor(data?: IEntityOfGuid) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
        }
    }

    static fromJS(data: any): EntityOfGuid {
        data = typeof data === 'object' ? data : {};
        let result = new EntityOfGuid();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data; 
    }
}

export interface IEntityOfGuid {
    id: string | undefined;
}

export class ToDoItem extends EntityOfGuid implements IToDoItem {
    userId!: string;
    message!: string;
    complete!: boolean;

    constructor(data?: IToDoItem) {
        super(data);
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.userId = _data["userId"];
            this.message = _data["message"];
            this.complete = _data["complete"];
        }
    }

    static fromJS(data: any): ToDoItem {
        data = typeof data === 'object' ? data : {};
        let result = new ToDoItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["message"] = this.message;
        data["complete"] = this.complete;
        super.toJSON(data);
        return data; 
    }
}

export interface IToDoItem extends IEntityOfGuid {
    userId: string;
    message: string;
    complete: boolean;
}

export class ApiException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}