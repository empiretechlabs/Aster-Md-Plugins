/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   ＥＭＰＩＲＥ  ＢＯＴ－ＭＤ  ＢＥＴＡ                                //
//                                                                                                      //
//                                         Ｖ：1．2．2                                                   //
//                                                                                                      //
//            ███████╗███╗   ███╗██████╗ ██╗██████╗ ███████╗                                            //
//            ██╔════╝████╗ ████║██╔══██╗██║██╔══██╗██╔════╝                                            //
//            █████╗  ██╔████╔██║██████╔╝██║██████╔╝█████╗                                              //
//            ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║██╔══██╗██╔══╝                                              //
//            ███████╗██║ ╚═╝ ██║██║     ██║██║  ██║███████╗                                            //
//            ╚══════╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝                                            //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!

   * @project_name : Empire-Md
   * @author : Empire Tech <https://github.com/efeurhobobullish>
   * @youtube : https://www.youtube.com/@EmpireTech
   * @description : Empire-Md ,A Multi-functional WhatsApp user bot.
   * @version 1.2.2

   * Licensed under the GPL-3.0 License;

   * ┌┤Created By Empire Tech.
   * © 2026 Empire-Md ✭ ⛥.
   * plugin date : 01/03/2026

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

const { smd, Config, smdBuffer, prefix } = require('../lib')

var surl = 'https://github.com/efeurhobobullish/Empire-Md' // Source URL
const number = '2348078582627'
var name = 'Empire Tech'
var body = '𝐄𝐌𝐏𝐈𝐑𝐄 𝐁𝐔𝐈𝐋𝐃𝐒'
var image = 'https://telegra.ph/file/1e60489705c851f74b55e.jpg'

let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ Name      : Empire Tech
│ Place     : Delta, Nigeria
│ Gender    : Male
│ Age       : 21
│ Phone     : wa.me/2348078582627
│ Youtube   : youtube.com/@only_one_empire
│ Status    : Developer | Bot Engineer
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`


// ---------------------------------------------------------------------------

smd({
  pattern: "intro",
  desc: "Show intro of user",
  category: "fun",
  filename: __filename,
  use: '<group link.>',
},
async (message) => {
  try {

    let media;
    try { 
      media = await smdBuffer(image) 
    } catch { 
      media = null 
    }

    const q = await message.bot.fakeMessage("contact", {}, name);

    let contextInfo = {
      ...(await message.bot.contextInfo(name, body, media, 1, surl, 2))
    };

    await message.send(text, { contextInfo: contextInfo }, "empire", q);

  } catch (e) {
    await message.error(`${e}\n\ncommand: intro`, e, false);
  }
});
