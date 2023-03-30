import { closeToast, showLoadingToast, showToast } from "vant";
let reqNum = 0;
const loading = {
    showToast(message): void {
        showToast({
            message
        });
    },
    showLoading(): void {
        if (reqNum === 0) {
            showLoadingToast({
                duration: 0
            });
        }
        reqNum++;
    },
    clearLoading(): Promise<boolean> {
        /** 合并loading */
        return new Promise((resolve) => {
            setTimeout(() => {
                closeLoading();
                resolve(true);
            }, 300);
        });
    },
    clearToast(): void {
        closeToast();
    }
};
/** 关闭loading */
function closeLoading(): void {
    if (reqNum <= 0) {
        return;
    }
    reqNum--;
    if (reqNum === 0) {
        Toast.clear();
    }
}

export default loading;
