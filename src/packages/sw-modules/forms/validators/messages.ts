export default {
  required: {
    en: 'This field is required',
    ru: 'Это поле обязательно для заполнения',
    fr: 'Ce champ est requis',
    es: 'Este campo es obligatorio',
    pt: 'Este campo é obrigatório',
    de: 'Dieses Feld ist erforderlich',
    zh: '此字段为必填',
  },
  email: {
    en: 'Valid email address required',
    ru: 'Требуется действительный адрес электронной почты',
    fr: 'Une adresse e-mail valide est requise',
    es: 'Se requiere una dirección de correo electrónico válida',
    pt: 'É necessário um endereço de e-mail válido',
    de: 'Eine gültige E-Mail-Adresse ist erforderlich',
    zh: '需要有效的电子邮件地址',
  },
  ethAddress: {
    en: 'Valid Ethereum address required',
    ru: 'Требуется действительный адрес Ethereum',
    fr: 'Adresse Ethereum valide requise',
    es: 'Se requiere una dirección de Ethereum válida',
    pt: 'Endereço Ethereum válido necessário',
    de: 'Gültige Ethereum-Adresse erforderlich',
    zh: '需要有效的 Ethereum 地址',
  },
  ethOrEnsAddress: {
    en: 'Valid Ethereum or ENS address required',
    ru: 'Требуется действительный адрес Ethereum или ENS',
    fr: 'Adresse Ethereum ou ENS valide requise',
    es: 'Se requiere una dirección Ethereum o ENS válida',
    pt: 'Endereço Ethereum ou ENS válido necessário',
    de: 'Gültige Ethereum- oder ENS-Adresse erforderlich',
    zh: '需要有效的 Ethereum 或 ENS 地址',
  },
  insufficientBalance: {
    en: 'Insufficient balance',
    ru: 'Недостаточный баланс',
    fr: 'Solde insuffisant',
    es: 'Saldo insuficiente',
    pt: 'Saldo insuficiente',
    de: 'Unzureichendes Guthaben',
    zh: '余额不足',
  },
  invalidNumberWithDot: {
    en: 'Must be a number with dot as a decimal point',
    ru: 'Должно быть числом с точкой в качестве десятичного разделителя',
    fr: 'Doit être un nombre avec un point comme séparateur décimal',
    es: 'Debe ser un número con punto como separador decimal',
    pt: 'Deve ser um número com ponto como separador decimal',
    de: 'Muss eine Zahl mit Punkt als Dezimaltrennzeichen sein',
    zh: '必须是以点作为小数点的数字',
  },
  exclude: {
    en: 'This value does not fit',
    ru: 'Это значение не подходит',
    fr: 'Cette valeur ne convient pas',
    es: 'Este valor no encaja',
    pt: 'Este valor não se encaixa',
    de: 'Dieser Wert passt nicht',
    zh: '此值不适合',
  },
  greaterThanZero: {
    en: 'Must be greater than 0',
    ru: 'Должно быть больше 0',
    fr: 'Doit être supérieur à 0',
    es: 'Debe ser mayor que 0',
    pt: 'Deve ser maior que 0',
    de: 'Muss größer als 0 sein',
    zh: '必须大于0',
  },
  invalidDate: {
    en: 'Must be valid date',
    ru: 'Должна быть действительная дата',
    fr: 'Doit être une date valide',
    es: 'Debe ser una fecha válida',
    pt: 'Deve ser uma data válida',
    de: 'Muss ein gültiges Datum sein',
    zh: '必须是有效日期',
  },
  min: {
    en: 'Must be greater than {minValue}',
    ru: 'Должно быть больше, чем {minValue}',
    fr: 'Doit être supérieur à {minValue}',
    es: 'Debe ser mayor que {minValue}',
    pt: 'Deve ser maior que {minValue}',
    de: 'Muss größer als {minValue} sein',
    zh: '必须大于{minValue}',
  },
  max: {
    en: 'Must be less than {maxValue}',
    ru: 'Должно быть меньше {maxValue}',
    fr: 'Doit être inférieur à {maxValue}',
    es: 'Debe ser menor que {maxValue}',
    pt: 'Deve ser menor que {maxValue}',
    de: 'Muss weniger als {maxValue} sein',
    zh: '必须小于{maxValue}',
  },
  number: {
    en: 'Must be a number',
    ru: 'Должно быть числом',
    fr: 'Doit être un nombre',
    es: 'Debe ser un número',
    pt: 'Deve ser um número',
    de: 'Muss eine Zahl sein',
    zh: '必须是数字',
  },
  selected: {
    en: 'Must be selected',
    ru: 'Должен быть выбран',
    fr: 'Doit être sélectionné',
    es: 'Debe ser seleccionado',
    pt: 'Deve ser selecionado',
    de: 'Muss ausgewählt werden',
    zh: '必须选择',
  },
  length: {
    en: 'No more than {length} characters',
    ru: 'Не более {length} символов',
    fr: 'Pas plus de {length} caractères',
    es: 'No más de {length} caracteres',
    pt: 'Não mais do que {length} caracteres',
    de: 'Nicht mehr als {length} Zeichen',
    zh: '不超过{length}个字符',
  },
  mustBeLess: {
    en: 'Must be less than {valueToCompare}',
    ru: 'Должно быть меньше {valueToCompare}',
    fr: 'Doit être inférieur à {valueToCompare}',
    es: 'Debe ser menor que {valueToCompare}',
    pt: 'Deve ser menor que {valueToCompare}',
    de: 'Muss kleiner sein als {valueToCompare}',
    zh: '必须小于 {valueToCompare}',
  },
  mustBeMore: {
    en: 'Must be more than {valueToCompare}',
    ru: 'Должно быть больше {valueToCompare}',
    fr: 'Doit être supérieur à {valueToCompare}',
    es: 'Debe ser más de {valueToCompare}',
    pt: 'Deve ser maior que {valueToCompare}',
    de: 'Muss mehr als {valueToCompare} sein',
    zh: '必须大于{valueToCompare}',
  },
  minDate: {
    en: 'Cannot be smaller than {minDate}',
    ru: 'Не может быть меньше чем {minDate}',
    fr: 'Ne peut pas être antérieur à {minDate}',
    es: 'No puede ser anterior a {minDate}',
    pt: 'Não pode ser anterior a {minDate}',
    de: 'Darf nicht kleiner als {minDate} sein',
    zh: '不能小于 {minDate}',
  },
  maxDate: {
    en: 'Cannot be bigger than {maxDate}',
    ru: 'Не может быть больше чем {maxDate}',
    fr: 'Ne peut pas être postérieur à {maxDate}',
    es: 'No puede ser posterior a {maxDate}',
    pt: 'Não pode ser posterior a {maxDate}',
    de: 'Darf nicht größer als {maxDate} sein',
    zh: '不能大于 {maxDate}',
  },
}
