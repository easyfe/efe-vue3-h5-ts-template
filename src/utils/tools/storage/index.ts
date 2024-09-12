/* 操作storage
 * @Author: hanxinxin
 * @Date: 2021-04-20 18:17:48
 * @Last Modified by: hanxinxin
 * @Last Modified time: 2024-09-06 15:56:11
 */

import validatorHelper from "@/utils/helper/validator";

const TOKEN_KEY = "SSY_AGENT_TOKEN"; //token存储key
const TOKEN_EXPIRE = 7 * 24 * 60 * 60 * 1000; //token有效期，单位毫秒

const storageUtil = {
    get: <T>(key: string): T | null => {
        try {
            const str = String(window.localStorage.getItem(key));
            if (!validatorHelper.isStrExist(str)) {
                return null;
            }
            const obj = JSON.parse(str);
            if (obj.expireTime === 0 || new Date().getTime() <= obj.expireTime) {
                return obj.value;
            }
            return null;
        } catch (e) {
            console.error(`存储获取[${key}]失败`, e);
            return null;
        }
    },
    /**
     * 设置storage
     * @param key key
     * @param value value
     * @param expires 有效期，单位毫秒
     */
    set: (key: string, value: any, expires?: number): void => {
        const obj = {
            value,
            expireTime: expires ? new Date().getTime() + expires : 0,
            startTime: new Date().getTime()
        };
        return window.localStorage.setItem(key, JSON.stringify(obj));
    },
    del: (key: string): void => {
        return window.localStorage.removeItem(key);
    },
    clear: (): void => {
        return window.localStorage.clear();
    }
};

const storage = {
    /**
     * 设置token
     * @param token
     */
    setToken: (token: string): void => {
        storageUtil.set(TOKEN_KEY, token, 0);
    },
    /**
     * 获取token
     * @returns
     */
    getToken: (): string => {
        return storageUtil.get<string>(TOKEN_KEY) || "";
    },
    /** 清除token */
    clear: (): void => {
        storageUtil.clear();
    }
};

export default storage;
