export class Tooltip {
    private TOOLTIP_DEFAULT_CLASS_NAME = "tooltip";
    private EVENT_MOUSEENTER = "mouseenter";
    private EVENT_MOUSELEAVE = "mouseleave";

    constructor(private target: HTMLElement, private position = "right") {
        this.onInit();
    }

    private generateTooltip(): HTMLElement {
        const element = document.createElement("p");
        element.classList.add(this.TOOLTIP_DEFAULT_CLASS_NAME);
        Object.assign(element.style, this.TOOLTIP_STYLES);
        element.innerHTML = this.target.title;

        return element;
    }

    private appendElementToTarget(): void {
        const element = this.generateTooltip();
        this.target.append(element);
    }

    private removeElement(): void {
        const child = this.target.querySelector(
            `.${this.TOOLTIP_DEFAULT_CLASS_NAME}`
        );
        this.target.removeChild(child);
    }

    private addEventListeners(): void {
        this.target.addEventListener(
            this.EVENT_MOUSEENTER,
            this.handleMouseEnter
        );
        this.target.addEventListener(
            this.EVENT_MOUSELEAVE,
            this.handleMouseLeave
        );
    }

    private handleMouseEnter = (): void => {
        this.appendElementToTarget();
    };

    private handleMouseLeave = (): void => {
        // this.removeElement();
    };

    private onInit(): void {
        this.addEventListeners();
    }
}
