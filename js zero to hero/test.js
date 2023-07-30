
function extractIDs(text) {
  const patternStart = "{ID:";
  const patternEnd = "|";
  const ids = [];

  let startIndex = text.indexOf(patternStart);

  while (startIndex !== -1) {
    const endIndex = text.indexOf(patternEnd, startIndex + patternStart.length);
    if (endIndex !== -1) {
      const id = text.substring(startIndex + patternStart.length, endIndex);
      ids.push(id);
      startIndex = text.indexOf(patternStart, endIndex + 1);
    } else {
      break;
    }
  }

  return ids;
}

// Test the function with the given text1 and text2
const text1 = "nasjkgnfadkjgj4ID432I432DID43431422ID:3728fiudsfghidshngkjfdskghffkdsoafjdoasfjdsiojfosdfoidsIDdsiaidojsiofdsaioiidsaiIddsadjosiadfiodjfioasDIfdiasofjdoasjfodisjafodasjIDdsiouajhdioasID:iwkdneuclksmq|fdsakofI92ID";
const text2 = "fsdafijdhskfhksdjhfjksdhIDsaduhsuaihdiashfDUDIDIIDIDIDIDIsaidoIDsiadIDIDIIDIDsidDIiDDIIDIID:iosdajfidusahfiuhdsaifuhdsauifhasdiufh|ksfjdsajfisdjafiasdfoasdoIDsdoaskdfpkasopfkdsID: dfsaidasoifjdsoifjosdaiIdsoadfkas";

const idsInText1 = extractIDs(text1);
const idsInText2 = extractIDs(text2);

console.log("IDs in text1:", idsInText1);
console.log("IDs in text2:", idsInText2);