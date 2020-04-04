/*Craig Bergmeyer
Task3.js
INFO 2134
Thoendel
April 3, 2020*/


//write you code between this comment
function convertToMetric(impMeasure, conversionType){
	impMeasure = parseFloat(impMeasure);
	conversionType = conversionType.toUpperCase().trim();
	let converted = 0;
	if (isNaN(impMeasure)) {
		throw new Error ('Error: The first argument must be a numeric value!');
	}

	if (conversionType == 'METERS'){
		converted = (impMeasure / 3.2808).toFixed(2);
		return Number(converted);

	}else if (conversionType == 'LITERS'){
		converted = (impMeasure / 0.26417).toFixed(2);
		return Number(converted);

	} else {
		
		throw new Error("Error: Second argument must be 'liters' or 'meters' only")	
	}

}


//and this comment
//do not modify any code beneath this line

test("Let's convert 10 gallons to liters", ()=> {
    expect(convertToMetric(10, "liters")).toBe(37.85);
});
test ("Let's convert 10 feet to meters", ()=>{
    expect(convertToMetric(10, "meters")).toBe(3.05);

});
test("Let's make sure we get an error if we pass a value other than a number in as the first argument", ()=> {
    expect(()=> {
        convertToMetric("Test", "Meters");
    }).toThrowError("Error: The first argument must be a numeric value!");
});
test("Let's make sure we get an error if we pass a value other than 'liters' or 'meters' as the second argument", ()=>{
    expect(()=> {
        convertToMetric(43, "test");
    }).toThrowError("Error: Second argument must be 'liters' or 'meters' only");
});
test("Let's make sure our conversion works if we input a string containing a number as the first argument", ()=>{
    expect(convertToMetric("10", "meters")).toBe(3.05);
});