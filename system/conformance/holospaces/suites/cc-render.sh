#!/usr/bin/env bash
# cc-render.sh — Component conformance: the render-contract envelope + serve-time dispatch.
#
# AUTHORITY (external, per holospaces vv/ discipline): a served object's Content-Type is the IANA media
# type it DECLARES (https://www.iana.org/assignments/media-types); render dispatch is a PURE function over
# bytes that are already verified by re-derivation (Law L5). The contract is interpretable linked data —
# `contentType` is schema.org `encodingFormat`. No bytes are trusted by the dispatcher; trust is recovered
# upstream in verify()/verifyDeep().
#
# This wraps the deterministic Node witness, which IS the behavioral definition of this row.
# Upstreams to: holospaces  vv/suites/cc-render.sh   (catalog row CC-render, arc42 ch.10).
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# HOLOGRAM holo-os/system is three levels up from .../conformance/holospaces/suites
SYSTEM="$(cd "$HERE/../../.." && pwd)"
echo "CC-render — render-contract envelope + dispatch (Law L5; IANA media types / schema:encodingFormat)"
node "$SYSTEM/tools/holo-render-contract-witness.mjs"
