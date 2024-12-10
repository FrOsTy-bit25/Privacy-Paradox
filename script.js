function focusBox(boxId) {
    const boxes = document.querySelectorAll('.extension-box');
    boxes.forEach(box => {
        if (box.id === boxId) {
            box.classList.add('focused');
        } else {
            box.classList.add('hidden');
        }
    });
}