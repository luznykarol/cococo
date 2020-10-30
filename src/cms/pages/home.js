import seo from "@/cms/partials/seo"

const homePage = {
  file: "content/pages/home.md",
  label: "Home",
  name: "Home",
  fields: [
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "index",
    },
    {
      label: "Type",
      name: "type",
      widget: "hidden",
      default: "page",
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Herobackground",
      name: "herobackground",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Herobackgroundsignature",
      name: "herobackgroundsignature",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Aboutleft",
      name: "aboutleft",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Aboutright",
      name: "aboutright",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Whatwedo",
      name: "whatwedo",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Abouthelper",
      name: "abouthelper",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Aboutbar",
      name: "aboutbar",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Collage1",
      name: "collage1",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Collage2",
      name: "collage2",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Collage3",
      name: "collage3",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Collage4",
      name: "collage4",
      widget: "image",
      default: "",
      required: false,
    },
    {
      label: "Projectshelper",
      name: "projectshelper",
      widget: "string",
      default: "",
      required: false,
    },
    {
      label: "Projectsbar",
      name: "projectsbar",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Projectsbarmobile",
      name: "projectsbarmobile",
      widget: "markdown",
      default: "",
      required: false,
    },
    {
      label: "Projectstext",
      name: "projectstext",
      widget: "string",
      default: "",
      required: false,
    },
    seo,
  ],
}

export default homePage
