export const dragDirective = {
	mounted(el: HTMLElement) {
		const { appProgramStore } = window.microApp.getGlobalData();
		if (!appProgramStore) return;
		const mouseDown = appProgramStore.activeProgram.mouseDown; // 获取拖拽方法
		const mouseMove = appProgramStore.activeProgram.mouseMove; // 获取拖拽方法
		const mouseUp = appProgramStore.activeProgram.mouseUp; // 获取拖拽方法
		el.onmousedown = (e: MouseEvent) => {
			mouseDown(e);
		};
		el.onmousemove = (e: MouseEvent) => {
			mouseMove(e);
		};
		el.onmouseup = (e: MouseEvent) => {
			mouseUp(e);
		};
	},
};
