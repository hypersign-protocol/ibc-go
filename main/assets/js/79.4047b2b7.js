(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{641:function(e,t,o){"use strict";o.r(t);var s=o(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-005-updateclient-events-clientstate-consensus-heights"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-005-updateclient-events-clientstate-consensus-heights"}},[e._v("#")]),e._v(" ADR 005: UpdateClient Events - ClientState Consensus Heights")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("25/04/2022: initial draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ibc-go")]),e._v(" implementation leverages the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/docs/core/events.md#EventManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos-SDK's EventManager"),o("OutboundLink")],1),e._v(" to provide subscribers a method of reacting to application specific events.\nSome IBC relayers depend on the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/core/02-client/keeper/events.go#L33",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("consensus_height")]),o("OutboundLink")],1),e._v(" attribute emitted as part of "),o("code",[e._v("UpdateClient")]),e._v(" events in order to run "),o("code",[e._v("07-tendermint")]),e._v(" misbehaviour detection by cross-checking the details of the "),o("em",[e._v("Header")]),e._v(" emitted at a given consensus height against those of the "),o("em",[e._v("Header")]),e._v(" from the originating chain. This includes such details as:")]),e._v(" "),o("ul",[o("li",[e._v("The "),o("code",[e._v("SignedHeader")]),e._v(" containing the commitment root.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("ValidatorSet")]),e._v(" that signed the "),o("em",[e._v("Header")]),e._v(".")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("TrustedHeight")]),e._v(" seen by the client at less than or equal to the height of "),o("em",[e._v("Header")]),e._v(".")]),e._v(" "),o("li",[e._v("The last "),o("code",[e._v("TrustedValidatorSet")]),e._v(" at the trusted height.")])]),e._v(" "),o("p",[e._v("Following the refactor of the "),o("code",[e._v("02-client")]),e._v(" submodule and associated "),o("code",[e._v("ClientState")]),e._v(" interfaces, it will now be possible for\nlight client implementations to perform such actions as batch updates, inserting "),o("code",[e._v("N")]),e._v(" number of "),o("code",[e._v("ConsensusState")]),e._v("s into the application state tree with a single "),o("code",[e._v("UpdateClient")]),e._v(" message. This flexibility is provided in "),o("code",[e._v("ibc-go")]),e._v(" by the usage of the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#any",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf "),o("code",[e._v("Any")]),o("OutboundLink")],1),e._v(" field contained within the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/proto/ibc/core/client/v1/tx.proto#L44",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("UpdateClient")]),o("OutboundLink")],1),e._v(" message.\nFor example, a batched client update message serialized as a Protobuf "),o("code",[e._v("Any")]),e._v(" type for the "),o("code",[e._v("07-tendermint")]),e._v(" lightclient implementation could be defined as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBCYXRjaGVkSGVhZGVycyB7CiAgICByZXBlYXRlZCBIZWFkZXIgaGVhZGVycyA9IDE7Cn0K"}}),e._v(" "),o("p",[e._v("To complement this flexibility, the "),o("code",[e._v("UpdateClient")]),e._v(" handler will now support the submission of "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-002-client-semantics#misbehaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("client misbehaviour"),o("OutboundLink")],1),e._v(" by consolidating the "),o("code",[e._v("Header")]),e._v(" and "),o("code",[e._v("Misbehaviour")]),e._v(" interfaces into a single "),o("code",[e._v("ClientMessage")]),e._v(" interface type:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2xpZW50TWVzc2FnZSBpcyBhbiBpbnRlcmZhY2UgdXNlZCB0byB1cGRhdGUgYW4gSUJDIGNsaWVudC4KLy8gVGhlIHVwZGF0ZSBtYXkgYmUgZG9uZSBieSBhIHNpbmdsZSBoZWFkZXIsIGEgYmF0Y2ggb2YgaGVhZGVycywgbWlzYmVoYXZpb3VyLCBvciBhbnkgdHlwZSB3aGljaCB3aGVuIHZlcmlmaWVkIHByb2R1Y2VzCi8vIGEgY2hhbmdlIHRvIHN0YXRlIG9mIHRoZSBJQkMgY2xpZW50CnR5cGUgQ2xpZW50TWVzc2FnZSBpbnRlcmZhY2UgewoJcHJvdG8uTWVzc2FnZQoKCUNsaWVudFR5cGUoKSBzdHJpbmcKCVZhbGlkYXRlQmFzaWMoKSBlcnJvcgp9Cg=="}}),e._v(" "),o("p",[e._v("To support this functionality the "),o("code",[e._v("GetHeight()")]),e._v(" method has been omitted from the new "),o("code",[e._v("ClientMessage")]),e._v(" interface.\nEmission of standardised events from the "),o("code",[e._v("02-client")]),e._v(" submodule now becomes problematic and is two-fold:")]),e._v(" "),o("ol",[o("li",[e._v("The "),o("code",[e._v("02-client")]),e._v(" submodule previously depended upon the "),o("code",[e._v("GetHeight()")]),e._v(" method of "),o("code",[e._v("Header")]),e._v(" types in order to "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v3.0.0/modules/core/02-client/keeper/client.go#L90",target:"_blank",rel:"noopener noreferrer"}},[e._v("retrieve the updated consensus height"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Emitting a single "),o("code",[e._v("consensus_height")]),e._v(" event attribute is not sufficient in the case of a batched client update containing multiple "),o("em",[e._v("Headers")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("The following decisions have been made in order to provide flexibility to consumers of "),o("code",[e._v("UpdateClient")]),e._v(" events in a non-breaking fashion:")]),e._v(" "),o("ol",[o("li",[e._v("Return a list of updated consensus heights "),o("code",[e._v("[]exported.Height")]),e._v(" from the new "),o("code",[e._v("UpdateState")]),e._v(" method of the "),o("code",[e._v("ClientState")]),e._v(" interface.")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVXBkYXRlU3RhdGUgdXBkYXRlcyBhbmQgc3RvcmVzIGFzIG5lY2Vzc2FyeSBhbnkgYXNzb2NpYXRlZCBpbmZvcm1hdGlvbiBmb3IgYW4gSUJDIGNsaWVudCwgc3VjaCBhcyB0aGUgQ2xpZW50U3RhdGUgYW5kIGNvcnJlc3BvbmRpbmcgQ29uc2Vuc3VzU3RhdGUuCi8vIFVwb24gc3VjY2Vzc2Z1bCB1cGRhdGUsIGEgbGlzdCBvZiBjb25zZW5zdXMgaGVpZ2h0cyBpcyByZXR1cm5lZC4gSXQgYXNzdW1lcyB0aGUgQ2xpZW50TWVzc2FnZSBoYXMgYWxyZWFkeSBiZWVuIHZlcmlmaWVkLgpVcGRhdGVTdGF0ZShzZGsuQ29udGV4dCwgY29kZWMuQmluYXJ5Q29kZWMsIHNkay5LVlN0b3JlLCBDbGllbnRNZXNzYWdlKSBbXUhlaWdodAo="}}),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("Maintain the "),o("code",[e._v("consensus_height")]),e._v(" event attribute emitted from the "),o("code",[e._v("02-client")]),e._v(" update handler, but mark as deprecated for future removal. For example, with tendermint lightclients this will simply be "),o("code",[e._v("consensusHeights[0]")]),e._v(" following a successful update using a single "),o("em",[e._v("Header")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Add an additional "),o("code",[e._v("consensus_heights")]),e._v(" event attribute, containing a comma separated list of updated heights. This provides flexibility for emitting a single consensus height or multiple consensus heights in the example use-case of batched header updates.")])])]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Subscribers of IBC core events can act upon "),o("code",[e._v("UpdateClient")]),e._v(" events containing one or more consensus heights.")]),e._v(" "),o("li",[e._v("Deprecation of the existing "),o("code",[e._v("consensus_height")]),e._v(" attribute allows consumers to continue to process "),o("code",[e._v("UpdateClient")]),e._v(" events as normal, with a path to upgrade to using the "),o("code",[e._v("consensus_heights")]),e._v(" attribute moving forward.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Consumers of IBC core "),o("code",[e._v("UpdateClient")]),e._v(" events are forced to make future code changes.")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("p",[e._v("Discussions:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1208#discussion_r839691927",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1208"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Issues:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/594",target:"_blank",rel:"noopener noreferrer"}},[e._v("#594"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("PRs:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1285",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1285"),o("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);