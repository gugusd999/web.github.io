var numOnly = function () {
    let inputs = document.querySelectorAll('input[data-filter]');
    for (let input of inputs) {
        let state = {
            value: input.value,
            start: input.selectionStart,
            end: input.selectionEnd,
            pattern: RegExp('^' + input.dataset.filter + '$')
        };
        input.addEventListener('input', event => {
            if (state.pattern.test(input.value)) {
                state.value = input.value;
            } else {
                input.value = state.value;
                input.setSelectionRange(state.start, state.end);
            }
        });
        input.addEventListener('keydown', event => {
            state.start = input.selectionStart;
            state.end = input.selectionEnd;
        });
    }
}