import { Component, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'tabs';
	tabs = ['1', '2', '3'];
	selectedTabIndex = 0;
	@ViewChild('tab') tabContainer: ElementRef;

	addTab() {
		if (this.tabs.length <= 9) {
			this.tabs.push(String(this.tabs.length + 1));
		} else {
			alert("Max number of tabs reached!");
		}
		this.checkForArrow();
	}

	tabAction(event) {
		if (event.action.toLowerCase() === 'remove') {
			this.removeTab(event.index);
		}
	}

	removeTab(index) {
		if (this.tabs.length === 1) {
			alert("Min number of tabs reached!");
		} else {
			if (index === (this.tabs.length - 1)) {
				this.selectedTabIndex = this.tabs.length - 2;
			}
			this.tabs.splice(index, 1);
		}
		this.checkForArrow();
	}

	checkForArrow() {
		this.showLeftArrow();
		this.showRightArrow();
	}

	selectTab(tabIndex) {
		this.selectedTabIndex = tabIndex;
		this.tabContainer.nativeElement.children[tabIndex].scrollIntoView({ behavior: "smooth", block: "start" });
	}

	isSelected(tabIndex) {
		return tabIndex === this.selectedTabIndex;
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
	}

	leftDrag() {
		this.tabContainer.nativeElement.children[0].scrollIntoView({ behavior: "smooth", block: "start" });
	}

	rightDrag() {
		this.tabContainer.nativeElement.children[this.tabs.length - 1].scrollIntoView({ behavior: "smooth", block: "start" });
	}

	showLeftArrow() {
		return (this.tabContainer.nativeElement.children[0].getBoundingClientRect().left < 40)
	}

	showRightArrow() {
		return (this.tabContainer.nativeElement.children[this.tabs.length - 1].getBoundingClientRect().right > (document.documentElement.clientWidth - 40))
	}
}
