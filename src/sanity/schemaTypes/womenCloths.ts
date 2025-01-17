import { defineType,defineField } from "sanity";

const womenCloth = defineType({
  name: "womenCloth",
  title: "Women Cloth",
  type: "document",
  fields: [
   defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(100), // Max length for better UX
    }),
    //slug field

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "number",
      validation: (rule) =>
        rule.min(0).max(5).precision(1).error("Ratings must be between 0 and 5."),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
            
          ]
        },
       
      ] 
    }),
   defineField({
    name: "colors",
    title: "Colors",
    type: "array",
    of: [{ type: "string" }],
    validation: (rule) =>
      rule.required().min(1).error("At least one color must be specified."),
  }),
    defineField({
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) =>
        rule.required().min(1).error("At least one size must be specified."),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0), // Price cannot be negative
    }),
    defineField({
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
      validation: (rule) =>
        rule.min(0).error("Discounted price cannot be negative."),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) =>
        rule.required().min(1).error("At least one image must be provided."),
    }),
  ],
});

export default womenCloth;
