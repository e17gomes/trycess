export const masks = {
  removeMask: (value: string) => {
    let cleanValue = value.replace(/[^\d,]/g, "");
    cleanValue = cleanValue.replace(",", ".");
    return cleanValue;
  },

  number: (value: string) => {
    return value.replace(/\D/g, "");
  },

  floatNumber: (value: string) => {
    if (value === "") return value;

    const onlyNumbersAndDot = value?.replace?.(/[^0-9.]/g, "");
    const hasPoint = (onlyNumbersAndDot?.match?.(/\./g) || [])?.length > 1;
    return hasPoint
      ? onlyNumbersAndDot?.replace?.(/\.+$/, "")
      : onlyNumbersAndDot;
  },

  money: (value: string) => {
    if (!value || typeof value !== "string") return "";

    let cleanValue = value?.replace(/[^\d]/g, "");
    cleanValue = cleanValue?.replace(/^0+/, "");
    if (cleanValue === "") {
      return "";
    }
    const number = Number.parseFloat(cleanValue) / 100;

    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);

    return formattedValue;
  },

  removeMoney: (value: string) => {
    let cleanValue = value.replace(/[^\d,]/g, "");
    cleanValue = cleanValue.replace(",", ".");
    return cleanValue;
  },
  parsePrice: (priceString: string) => {
    return Number.parseFloat(
      priceString.replace("R$", "").replace(/\./g, "").replace(",", ".").trim(),
    );
  },
};
