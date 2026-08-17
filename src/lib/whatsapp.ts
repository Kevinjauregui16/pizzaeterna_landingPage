const phone = "12395551234";
const message = "Hola, quisiera hacer un pedido.";

export const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
