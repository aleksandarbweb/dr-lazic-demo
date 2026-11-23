export const businessData = {
  name: 'Dental Clinic Dr Vesna Lazić',
  shortName: 'Dental Clinic',
  legalName: 'Dental Clinic Dr Vesna Lazić',
  url: 'https://drlazic.demo',
  telephone: '+38163283087',
  phoneDisplay: '+381 63 283 087',
  email: 'lazicvesna63@gmail.com',
  address: {
    streetAddress: 'Nebojšina 6',
    addressLocality: 'Beograd',
    postalCode: '11000',
    addressCountry: 'RS',
  },
  addressDisplay: 'Nebojšina 6, 11000 Beograd, Srbija',
  googleMapsUrl:
    'https://www.google.com/maps/place/Dental+Clinic+Lazi%C4%87+-+Dr.+Vesna+Lazi%C4%87/@44.7942158,20.4670367,17z/data=!3m1!4b1!4m6!3m5!1s0x475a715a2d7c00db:0xf40dbd6708dbc4c9!8m2!3d44.7942158!4d20.4670367!16s%2Fg%2F11wj5_7g_v?entry=ttu',
  appleMapsUrl:
    'https://maps.apple.com/?q=Neboj%C5%A1ina%206%2C%2011000%20Beograd%2C%20Srbija',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=44.7942158,20.4670367&z=16&output=embed',
  geo: {
    latitude: 44.7942158,
    longitude: 20.4670367,
  },
  instagram: 'https://www.instagram.com/dentalclinic_lazic/?hl=en',
  instagramHandle: '@dentalclinic_lazic',
  youtube: 'https://www.youtube.com/channel/UCHXXhmyqKrb-QY97QmQG4xA',
  facebook: 'https://www.facebook.com/dentalclinicbeograd/',
  whatsappUrl:
    'https://api.whatsapp.com/send/?phone=38163283087&text&type=phone_number&app_absent=0',
  /** Short line for schema / compact UI */
  hoursDisplay: 'Pon–Pet 09:00–20:00 · Sub 09:00–15:00 · Ned zatvoreno',
  hours: {
    weekdays: { opens: '09:00', closes: '20:00' },
    saturday: { opens: '09:00', closes: '15:00' },
    sundayClosed: true,
  },
  openingHours: {
    byAppointment: false,
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
    opens: '09:00',
    closes: '20:00',
  },
  googleRating: 4.8,
  googleReviewCountHint: 'Google',
}
