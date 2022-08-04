export class Progress {
  private elem: HTMLElement;

  constructor(selector: string) {
    this.elem = document.querySelector<HTMLElement>(selector)!;
  }

  reset() {
    this.elem.style.width = "0";
  }

  update(percent: number) {
    this.elem.style.width = `${percent}%`;
  }
}
