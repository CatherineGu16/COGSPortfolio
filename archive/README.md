# archive/

Old files kept out of the way of the v2.0 workspace. **Not published** to the live
site (the deploy workflow excludes this folder).

## archive/v1.0/
Raw file copies of the v1.0 portfolio pages, moved here to declutter the root while
you build v2.0.

**These are backups, not the canonical v1.0.** The real, fully-working v1.0 lives in
two places:
- **Live:** https://catherinegu16.github.io/COGSPortfolio/v1.0/ (built from the git tag)
- **Git tag:** `v1.0` — `git checkout v1.0` to see the complete self-contained snapshot

Because these copies were moved away from the shared `css/`, `images/`, and `js/`
folders at the root, some of their relative links (to `styles.css`, images, etc.) won't
resolve if you open them directly from here. To view a working v1.0, use the live link
above. To restore any file to the root, `git mv` it back.
