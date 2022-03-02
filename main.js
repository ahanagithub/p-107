//https://teachablemachine.withgoogle.com/models/tUtA4oU1S/

function start_classification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tUtA4oU1S/model.json', modelready)
}

function modelready()
{
    classifier.classify(gotresults)
}

function gotresults(error, results)
{
    console.log(results);