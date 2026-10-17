# Domain docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`GLOSSARY.md`** at the repo root, or
- **`GLOSSARY-MAP.md`** at the repo root if it exists; it points to one `GLOSSARY.md` per context. Read each one relevant to the topic.
- **`docs/adr/`**: read the architecture decision records relevant to the area being changed.

If these files do not exist, proceed without flagging their absence. Create them only when domain-modeling work resolves terminology or a consequential design decision.

## File structure

This is a single-context repository. Use one root `GLOSSARY.md` and `docs/adr/` for system-wide decisions; do not create per-context glossaries or ADR folders unless the repo grows into a genuine monorepo.

## Use the glossary's vocabulary

When an output names a domain concept (for example, an issue title, proposal, hypothesis, or test name), use the term defined in `GLOSSARY.md`. If the concept is not defined, reconsider whether it belongs in the repo's vocabulary or note the gap for domain modeling.

## Flag ADR conflicts

If a change conflicts with an existing ADR, surface the conflict explicitly rather than silently overriding it.
