/**
 * Responsible for retrieve and set data on local storage.
 *
 * @export
 * @interface ILocalStorage
 * @template T is the type of the data to be stored
 */
export interface ILocalStorage<T> {
    /**
     * the storage object value
     *
     * @type {T}
     * @memberof ILocalStorage
     */
    value: T;
    /**
     * callback function for set the value on local storage
     *
     * @param {T} value
     * @memberof ILocalStorage
     */
    setValue(value: T): void;
}
