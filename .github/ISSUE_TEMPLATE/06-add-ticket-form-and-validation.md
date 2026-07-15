---
name: Add ticket form and validation
about: Create a form to add tickets with required-field validation
title: "Add ticket form and validation"
labels: assessment
---

## Goal

Create a form that adds a new ticket to state.

## Form fields

- Customer name
- Subject
- Priority
- Submit button

## Validation requirements

- Customer is required
- Subject is required
- Validation errors must be displayed
- The form must clear after successful submission

## Acceptance criteria

- [ ] Form fields are controlled inputs
- [ ] Required validation works for customer and subject
- [ ] Errors are visible to the user
- [ ] Successful submit adds a ticket to state
- [ ] Form fields reset after a successful submit

## Notes

New tickets should receive a unique `id` and a sensible default status such as `Open`.
