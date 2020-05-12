(function() {
    let $ = document.getElementById.bind(document);

    function calculateOutputs() {
        let sensitivity = $("sensitivity").valueAsNumber / 100.0;
        let specificity = $("specificity").valueAsNumber / 100.0;
        let prevelance = $("prevelance").valueAsNumber / 100.0;

        let true_positive_rate = sensitivity * prevelance;
        let true_negative_rate = specificity * (1.0 - prevelance);

        let false_positive_rate = (1.0 - specificity) * (1.0 - prevelance);
        let false_negative_rate = (1.0 - sensitivity) * prevelance;

        let probability_given_positive = (true_positive_rate) / (true_positive_rate + false_positive_rate);
        let probability_given_negative = (false_negative_rate) / (true_negative_rate + false_negative_rate);

        $("positive_likelihood").value = (probability_given_positive * 100).toFixed(2).toString();
        $("negative_likelihood").value = (probability_given_negative * 100).toFixed(2).toString();
    }


    document.addEventListener("DOMContentLoaded", () => {
        $("sensitivity").addEventListener("change", calculateOutputs);
        $("specificity").addEventListener("change", calculateOutputs);
        $("prevelance").addEventListener("change", calculateOutputs);
        calculateOutputs();
    });
})()