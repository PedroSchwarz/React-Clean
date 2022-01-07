export interface NetworkInfo {
    checkIsConnected(): boolean;
}

export class NetworkInfoImpl implements NetworkInfo {
    checkIsConnected(): boolean {
        return navigator.onLine;
    }
}