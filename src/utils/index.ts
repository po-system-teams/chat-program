/**
 * 判断对象是否为空
 * @param {object} obj 要判断的对象
 * @returns {boolean} 如果对象为空则返回true，否则返回false
 */
export function isEmptyObject(obj: any) {
	return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * 获取程序名称
 * @param programName 程序名称字符串
 * @returns 程序名称的首部分，如果不存在则返回空字符串
 */
export function getProgramName(programName: string) {
	return programName.split('.')[0] || '';
}
/**
 * 将毫秒转换为分钟
 * @param ms 毫秒数
 * @returns 分钟数，如果为0则返回0
 */
export function msToMinutes(ms: number) {
	const minutes = ms / 60000;
	if (minutes) {
		return minutes.toFixed(2).toString().replace('.', ':');
	}
	return minutes;
}
let clickFlag = false;

/**
 * 用于实现双击事件的函数
 * @param fn - 点击回调函数
 */
export function doubleClick(fn: () => void) {
	setTimeout(() => {
		clickFlag = false;
	}, 300);
	if (clickFlag) {
		fn();
	}
	clickFlag = true;
}
/**
 * 随机打乱给定数组的顺序
 * @param arr 需要打乱顺序的数组
 * @returns 打乱顺序后的数组
 */
export const shuffleArray = <T>(arr: T[]): T[] => {
	const copyArr = [...arr];
	for (let i = copyArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
	}
	return copyArr;
};

// 事件委托，循环获取其父元素，直到找到父元素中带有data-为止
export function getDatasetByTarget(e: Event, datasetName: string) {
	let target = e.target as HTMLElement;
	while (target && target.parentElement && !target.dataset[datasetName]) {
		target = target.parentElement;
	}
	return target;
}

// 持久化pinia数据
export function setLocalStorage(key: string, value: any) {
	localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
	return localStorage.getItem(key);
}

export function removeLocalStorage(key: string) {
	localStorage.removeItem(key);
}
