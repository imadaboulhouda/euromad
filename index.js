async function a(euro){

	const f = await fetch("https://www.westernunion.com/presentationservice/rest/api/v1.0/FeeInquiryEstimated", {
		body:'{"security":{"session":{"id":"web-3b7c493e-e7a5-4d4c-b767-fced465dff3b"},"client_ip":"196217156049"},"external_reference_no":"1","origination_channels":{"channel":[{"type":"WEB"}]},"sender":{"address":{"country_iso_code":"FR"}},"reference_location":{"address":{"country_iso_code":"FR"}},"payment_details":{"origination":{"currency_iso_code":"EUR","country_iso_code":"FR","principal_amount":"'+euro+'"},"destination":{"currency_iso_code":"MAD","country_iso_code":"MA"},"payment_type":"ALL"},"inquiry_type":"MONEY_TRANSFER_FEE","inquiry_accuracy":"EXACT","version":2,"bashPath":"/FR/fr/"}:',
		"method":"POST","mode":"cors"});
	return await f.json();
}

a(100);
