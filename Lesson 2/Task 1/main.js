let L = prompt ('Вкажіть довжину офісу в метрах');

let W = prompt ('Вкажіть ширину офісу в м');

let H = prompt ('Вкажіть висоту офісу в м');

let wallArea = 2 * (L + W) * H;

let wallCosts = (wallArea / 16).toFixed(0);

alert(`Для ремонту офісу потрібно ${wallCosts} банок фарби`);

