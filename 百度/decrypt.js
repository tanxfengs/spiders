/**
 * 指数解密
 * */


y = {'period': '20220413|20220512', '_all': 'N8.P8LNp8pNLN8j.NLN8NTpLN8dpdLNpDPjLNp.DjLNpNNPLNEPjELNEPP.LNEPppLNEEDPLNEPTpLNE.PPLNEPDELNE8jjLNpjppLNpjEpLNp8p8LN8NDPLNppENLNppNTLNE8TTLNED8PLNp.DDLNpP8jLNpEDNLNpTEELNpT88LNpETN', '_pc': 'Np88LNpdDLND8PLNdpdLN.pDLN88TL.j8jL.jdjL.NNpLN8.DLNNTjLNE88LN8dNLN8TjLN8D8LNpDpLNET8LNN8.LN.pNLNNPPLNdEDLNPNdL.jjdLN8djL.jNNLN.PPLN8.jLN8PTLN8PDLN8.T', '_wise': 'pNjPLpNDPLEppPLpP88LppETLpPDPLpdppLpjjpLEpDTLpNDdLpdNDLpNDTLE8DTLpNDELEpNpLpjTdLpdNNL8jdTL8PdEL8DT8L8Pp8L8jpNLp.pNLp.pjLpT8NLpEDELpTpdLpDjpLpD.PLpT8D'}
let ptbk = 'E6pDudxLjVTN8.P7.86-3+,0%41925'
e = {
    notInNames: []
}



function run(ptbk, y) {
    for (g = ptbk.split(""),
        m = {},
        h = 0; h < g.length / 2; h++){
            m[g[h]] = g[g.length / 2 + h];
        }


        for (y.notin && e.notInNames.push(e.words[b]),w = y._all ? y._all.split(""): [],x = y._pc ? y._pc.split(""): [],I = y._wise ? y._wise.split(""): [],M = [], C = [], D = [], k = 0;k < w.length;
        k++)
            w[k] && M.push(m[w[k]]),
            x[k] && C.push(m[x[k]]),
            I[k] && D.push(m[I[k]]);

        y.all = M.join(""),
        y.pc = C.join(""),
        y.wise = D.join("")
        console.log(y.all)
        return y.all
}

run(ptbk, y)