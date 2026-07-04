# Project instructions for Codex

This project is a static HTML course website for a Hebrew course named:

**"אלקטרוניקת הספק"**

---

## Project goal

Build a complete, deep, self-study Hebrew course in Power Electronics.

This course should **not** be a short summary.
Each lesson should read like a full engineering lecture note / study chapter.

The course is based on the PDF files inside `source_materials/`, but Codex may expand, explain, reorganize, and develop the material pedagogically using general power electronics knowledge.

Do **not** copy long sections verbatim from the PDF. Convert, summarize, organize, and expand pedagogically.

---

## Output structure

Use this structure:

```text
index.html
assets/
  css/
    course.css
  js/
    course.js
lessons/
  lesson-01-.../
    index.html
  lesson-02-.../
    index.html
source_materials/
```

### Required files

- `index.html` — main course homepage.
- `lessons/` — all lesson folders.
- `assets/css/course.css` — course styling.
- `assets/js/course.js` — optional JavaScript.
- `source_materials/` — source PDFs and other source materials. Do not delete this folder.

Each lesson should be in its own folder:

```text
lessons/
  lesson-01-introduction/
    index.html
  lesson-02-power-semiconductors/
    index.html
```

---

## Language and direction

- All course content must be in Hebrew.
- Use `lang="he"` and `dir="rtl"`.
- Keep important English engineering terms in parentheses, for example:
  - Buck Converter
  - Boost Converter
  - Duty Cycle
  - CCM
  - DCM
  - PWM
  - RMS
  - Ripple
  - ESR
  - MOSFET
  - IGBT
  - Thyristor
- Use clear professional Hebrew.
- Explain like an engineering instructor, not like a short encyclopedia summary.
- Prefer precise Hebrew explanations with English technical terms where useful.

---

## Depth requirement

Each lesson must be a broad and detailed teaching unit.

Target depth per lesson:

- At least 2500 Hebrew words where the topic justifies it.
- Prefer 3000–5000 Hebrew words for central topics such as:
  - Rectifiers
  - Buck Converter
  - Boost Converter
  - Buck-Boost Converter
  - Inverters
  - PWM
  - Switching losses
  - CCM/DCM
  - Power semiconductor devices
- Do not artificially pad the text, but do explain deeply and pedagogically.

A lesson is **not acceptable** if it only contains:

- A short introduction
- One formula
- Two examples
- A few short exercises

The goal is to create self-study chapters that can actually teach the topic.

---

## Required structure for every lesson

Each lesson page must include the following sections.

### 1. Lesson title and overview

Include:

- Lesson title.
- Short description.
- What the lesson covers.
- Why the lesson matters.
- Where this lesson fits in the course.

### 2. Prerequisites

Explain what the student should remember from previous lessons.

Examples:

- RMS values.
- Average values.
- Diode behavior.
- Inductor voltage-current relation.
- Capacitor current-voltage relation.
- Power, energy, and efficiency.

### 3. Learning objectives

Include 6–10 learning objectives.

The objectives should include:

- Conceptual understanding.
- Mathematical derivation.
- Circuit operation.
- Physical intuition.
- Practical engineering interpretation.

### 4. Engineering motivation

Explain:

- Why this topic matters in real power electronics.
- Typical applications.
- What problem this circuit/component solves.
- Why engineers use this topology/component in practice.
- The difference between ideal theory and practical design.

### 5. Conceptual explanation

Explain slowly and clearly.

Requirements:

- Build intuition before formulas.
- Avoid jumping directly to equations.
- Explain what the circuit is trying to accomplish.
- Explain what a student should imagine physically.
- Use analogies only when they help, and keep them engineering-accurate.

### 6. Physical operation

Where relevant, explain:

- Current paths.
- Energy transfer.
- Role of the switch, diode, inductor, capacitor, and load.
- What happens during each switching interval.
- What the load “sees”.
- What changes between ON and OFF intervals.
- What assumptions are being made.

For converter lessons, always describe:

- ON interval.
- OFF interval.
- Current path.
- Inductor voltage.
- Inductor current.
- Capacitor role.
- Output ripple.
- Load current path.

### 7. Mathematical development

Include step-by-step derivations.

Requirements:

- Define every variable.
- Include units.
- Explain every assumption.
- Explain why each equation is true.
- Explain the physical meaning of equations.
- Include limiting cases where useful.
- Connect formulas to physical behavior.

Examples of expected derivations:

- Volt-second balance.
- Charge balance.
- Average output voltage.
- RMS current.
- Ripple current.
- Ripple voltage.
- CCM/DCM boundary.
- Efficiency estimate.
- Loss estimate.

### 8. Waveforms

Describe important waveforms in words and, where useful, with simple HTML/SVG/ASCII diagrams.

For converter lessons include:

- Switch voltage/current.
- Diode voltage/current.
- Inductor voltage/current.
- Capacitor current.
- Output voltage ripple.
- Input current.
- Output current.

Explain how the following affect waveforms:

- Duty cycle.
- Load current.
- Inductor value.
- Capacitor value.
- Switching frequency.
- Diode/MOSFET non-idealities.
- CCM versus DCM.

### 9. Design rules and engineering rules of thumb

Include practical formulas and design interpretation.

Discuss where relevant:

- How to choose inductor value.
- How to choose capacitor value.
- Ripple constraints.
- Current rating.
- Voltage rating.
- Switching frequency tradeoff.
- Thermal limits.
- Safety margin.
- Efficiency tradeoff.
- EMI considerations.
- Layout sensitivity.

### 10. Non-ideal behavior

Discuss practical behavior where relevant:

- Diode voltage drop.
- MOSFET `Rds(on)`.
- IGBT saturation voltage.
- ESR.
- ESL.
- Switching losses.
- Reverse recovery.
- Dead time.
- Thermal resistance.
- Saturation.
- Leakage current.
- Gate drive limitations.
- Efficiency reduction.
- Component stress.

### 11. Worked examples

Include at least 3–5 detailed solved examples per lesson.

The examples should include a mix of:

- Simple conceptual example.
- Numerical calculation example.
- Design-oriented example.
- Non-ideal correction example.
- Interpretation example.

Each example must include:

1. Given data.
2. Required quantity.
3. Step-by-step solution.
4. Final numerical answer where relevant.
5. Physical interpretation.

Do not write only the final result.

### 12. Common mistakes

Include 8–12 common mistakes.

For each mistake:

- State the mistake.
- Explain why it is wrong.
- Give the correct reasoning.
- Where useful, show a short counterexample.

### 13. Check yourself questions

Include conceptual questions with short answers.

These should test understanding, not only calculations.

### 14. Exercises

Include 8–15 exercises per lesson.

The exercises should include:

- Easy questions.
- Medium questions.
- Advanced questions.
- Design-oriented questions.
- Conceptual explanation questions.

### 15. Answers or hints

Give answers or solution outlines for all exercises.

For longer exercises, give strong hints or a structured solution path.

### 16. Summary

Include:

- Key ideas.
- Main formulas.
- Physical interpretation.
- Important assumptions.
- What will be used in the next lesson.

### 17. Navigation

Every lesson must include:

- Previous lesson link.
- Back to homepage link.
- Next lesson link.

Navigation should work both at the top and at the bottom of the lesson where appropriate.

---

## CSS / visual style

Use and create classes as needed:

- `content-section`
- `definition`
- `intuition`
- `note`
- `warning`
- `design-rule`
- `example-block`
- `exercise-block`
- `answer-block`
- `mistake-block`
- `equation`
- `waveform`
- `formula-box`
- `summary-box`
- `table-wrap`
- `lesson-nav`
- `nav-button`

The website should be:

- Clean.
- Professional.
- Readable.
- Responsive.
- Suitable inside a WordPress iframe.
- Comfortable for long Hebrew reading.
- Suitable for engineering students.

Use good spacing, readable font sizes, and clear section separation.

---

## Index page requirements

`index.html` should be a full course homepage.

It should include:

- Hero section.
- Course title.
- Short description.
- Course goals.
- Suggested prerequisites.
- Syllabus grid with all lessons.
- A short description under each lesson card.
- Estimated study time for each lesson.
- Note that this is a developing course based on lecture notes and exercises.
- Links to all lesson folders.

The index page should not contain the whole course content. It is a navigation and overview page.

---

## Lesson-specific quality expectations

### Buck Converter lesson

The Buck Converter lesson must be a full self-contained chapter.

It should include:

- Ideal Buck topology.
- ON interval.
- OFF interval.
- Freewheel diode current path.
- Synchronous Buck option.
- CCM operation.
- DCM operation.
- Volt-second balance.
- Charge balance.
- Output voltage derivation.
- Inductor ripple derivation.
- Capacitor ripple derivation.
- Boundary between CCM and DCM.
- Effect of load current.
- Effect of switching frequency.
- Component design example.
- Non-ideal duty cycle correction.
- Efficiency estimation.
- Practical design warnings.
- MOSFET and diode stress.
- Inductor saturation.
- Output capacitor ESR.
- Layout and EMI notes.

### Rectifier lessons

Rectifier lessons should include:

- Half-wave rectifier.
- Full-wave rectifier.
- Bridge rectifier.
- Average output voltage.
- RMS values.
- Diode conduction intervals.
- Current path explanation.
- Capacitor filter.
- Ripple approximation.
- Peak diode current.
- Transformer utilization where relevant.
- Practical diode drops and losses.

### Boost and Buck-Boost lessons

These lessons should include:

- ON/OFF intervals.
- Energy storage in the inductor.
- Why output can exceed input.
- Polarity issues for Buck-Boost.
- CCM derivations.
- DCM intuition.
- Component stress.
- Duty cycle sensitivity.
- Practical limitations at high duty cycle.

### Inverter and PWM lessons

These lessons should include:

- Half-bridge and full-bridge intuition.
- DC to AC conversion.
- Square wave inverter.
- PWM principle.
- Modulation index.
- Fundamental component.
- Harmonics.
- Output filtering.
- Dead time.
- Switch stress.
- Practical gate-drive issues.

---

## Important constraints

- Work only inside this repository.
- Do not edit unrelated files.
- Do not delete `source_materials`.
- Do not delete PDFs.
- Do not run `git push`.
- Do not install packages unless explicitly approved.
- Do not copy long text verbatim from PDFs.
- Make changes locally only.
- The user will review, commit, and push.
- If a malformed old file exists, do not delete it unless explicitly asked.
- Ask before deleting files, moving many files, installing packages, using the network, or running Git commands that modify remote state.

---

## Permissions behavior

Codex may edit and create files inside this repository without asking before every small change.

Codex should ask before:

- Deleting files.
- Running `git push`.
- Installing packages.
- Editing files outside this repository.
- Using the network.
- Making irreversible changes.

---

## Quality bar before finishing

Before finishing any task, verify:

- All lesson pages exist.
- All internal links work.
- Every lesson links back to homepage.
- Previous/next navigation works.
- Hebrew direction is correct.
- CSS renders readable long lessons.
- The lesson is deep enough for an engineering student.
- The content is not merely a summary.
- Examples contain step-by-step reasoning.
- Exercise hints or answers exist.
- No source PDF was deleted.
- No Git push was performed.

---

## Final report format

At the end of a task, report:

1. Files created.
2. Files modified.
3. Lessons significantly expanded.
4. Link verification result.
5. Any manual review needed.
6. Any files intentionally left unchanged.
7. Confirmation that no Git push was performed.
