const footer = {
  file: "content/partials/footer.md",
  label: "Footer",
  name: "footer",
  fields: [
    {
      label: "Heading",
      name: "heading",
      widget: "string",
    },
    {
      label: "Contact",
      name: "contact",
      widget: "object",
      fields: [
        {
          label: "Image",
          name: "image",
          widget: "file",
          required: false,
          a,
        },
        {
          label: "Text",
          name: "text",
          widget: "string",
          required: false,
        },
        {
          label: "Mail",
          name: "mail",
          widget: "string",
          required: false,
        },
        {
          label: "Phone",
          name: "phone",
          widget: "string",
          required: false,
        },
      ],
    },
    {
      label: "Socials",
      name: "socials",
      widget: "object",
      fields: [
        {
          label: "Instagram",
          name: "instagram",
          widget: "string",
          required: false,
        },
        {
          label: "Facebook",
          name: "facebook",
          widget: "string",
          required: false,
        },
        {
          label: "Twitter",
          name: "twitter",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
}

export default footer
