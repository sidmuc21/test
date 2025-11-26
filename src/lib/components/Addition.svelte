<script>
    import { adder } from "$lib/calculator.js";
    let number1 = $state();
    let number2 = $state();
    let result = $state();

    function calculate() {
        result = adder(parseInt(number1),parseInt(number2));
    }

</script>

<section>
    <input type="text" id="number1" bind:value={number1}>
    <input type="text" id="number2" bind:value={number2}>
    <button id="addButton" onclick={calculate}>Add two numbers</button>
    <p id="result">Result: {result}</p>
</section>