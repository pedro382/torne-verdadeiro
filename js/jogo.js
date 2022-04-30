const todosCircuitos = [
            // Fase 1
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"]]}',
            // Fase 2
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[143,145],"solucoesPossiveis":[["0","0","0","1","0","1","0","0","0","0"]]}',
            // Fase 3
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"not","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
            // Fase 4
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","1","1","0","0","0","0"]]}',
            // Fase 5
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"or","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-esquerda","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"]]}',
            // Fase 6
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"not","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"not","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[143,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
            // Fase 7
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"and","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-esquerda","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"linha-central-vertical","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"and","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-esquerda","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","1","1","0","1","1","0","0","0"]]}',
            // Fase 8
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"or","posicao":133,"conexao":[143,144]},{"elemento":"linha-recentralizadora-direita","posicao":124,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"or","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-esquerda","posicao":126,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[143,144,146,147],"solucoesPossiveis":[["0","0","0","0","1","0","0","1","0","0"],["0","0","0","0","1","0","1","1","0","0"],["0","0","0","1","1","0","1","1","0","0"],["0","0","0","1","0","0","0","1","0","0"],["0","0","0","0","1","0","1","0","0","0"],["0","0","0","1","0","0","1","0","0","0"],["0","0","0","1","1","0","1","0","0","0"],["0","0","0","1","0","0","1","1","0","0"],["0","0","0","1","1","0","0","1","0","0"]]}',
            // Fase 9
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"not","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"and","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-direita","posicao":126,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[143,145,146],"solucoesPossiveis":[["0","0","0","0","0","1","1","0","0","0"]]}',
            // Fase 10
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"or","posicao":123,"conexao":[133,134]},{"elemento":"linha-recentralizadora-direita","posicao":114,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"not","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[143,144,146],"solucoesPossiveis":[["0","0","0","1","1","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"],["0","0","0","1","0","0","0","0","0","0"]]}',
            // Fase 11
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"and","posicao":133,"conexao":[143,144]},{"elemento":"linha-recentralizadora-direita","posicao":124,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"or","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-esquerda","posicao":126,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[143,144,146,147],"solucoesPossiveis":[["0","0","0","1","1","0","1","1","0","0"],["0","0","0","1","1","0","0","1","0","0"],["0","0","0","1","1","0","1","0","0","0"]]}',
            // Fase 12
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"and","posicao":131,"conexao":[141,142]},{"elemento":"linha-recentralizadora-direita","posicao":122,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"linha-central-vertical","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"not","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"or","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-esquerda","posicao":126,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[141,142,144,146,147],"solucoesPossiveis":[["0","1","1","0","0","0","1","0","0","0"],["0","1","1","0","0","0","1","1","0","0"],["0","1","1","0","0","0","0","1","0","0"]]}',
            // Fase 13
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"not","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"and","posicao":104,"conexao":[114,115]},{"elemento":"linha-recentralizadora-direita","posicao":95,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"]]}',
            // Fase 14
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"or","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-direita","posicao":105,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","1","1","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 15
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"not","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 16
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"or","posicao":124,"conexao":[134,135]},{"elemento":"linha-recentralizadora-direita","posicao":115,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"not","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
            // Fase 17
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"and","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-esquerda","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"and","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-esquerda","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","1","0","1","1","0","0","0"]]}',
            // Fase 18
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"or","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-direita","posicao":123,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"and","posicao":115,"conexao":[125,126]},{"elemento":"linha-recentralizadora-direita","posicao":106,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","1","0","0","1","0","0","0"],["0","0","1","0","0","0","1","0","0","0"],["0","0","1","1","0","0","1","0","0","0"]]}',
            // Fase 19
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"or","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-esquerda","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"or","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-esquerda","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","0","0","0","1","0","0","0"],["0","0","1","1","0","1","0","0","0","0"],["0","0","1","0","0","1","1","0","0","0"],["0","0","0","0","0","1","1","0","0","0"],["0","0","0","0","0","1","0","0","0","0"],["0","0","1","1","0","1","1","0","0","0"],["0","0","1","0","0","1","0","0","0","0"],["0","0","1","1","0","0","1","0","0","0"],["0","0","1","0","0","0","1","0","0","0"]]}',
            // Fase 20
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"not","posicao":124,"conexao":[134]},{"elemento":"not","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"and","posicao":104,"conexao":[114,115]},{"elemento":"linha-recentralizadora-esquerda","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
            // Fase 21
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"not","posicao":134,"conexao":[144]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"and","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-esquerda","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"not","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 22
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"not","posicao":134,"conexao":[144]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"or","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-esquerda","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 23
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"not","posicao":134,"conexao":[144]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"or","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-esquerda","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"not","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","1","1","0","0","0","0"]]}',
            // Fase 24
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"and","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-direita","posicao":103,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"not","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"or","posicao":115,"conexao":[125,126]},{"elemento":"linha-recentralizadora-esquerda","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","0","0","1","0","0","0"]]}',
            // Fase 25
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"and","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-direita","posicao":103,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"not","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"or","posicao":115,"conexao":[125,126]},{"elemento":"linha-recentralizadora-direita","posicao":106,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"not","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","0","0","1","1","0","0","0"]]}',
            // Fase 26
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"and","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-esquerda","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"not","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"not","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"or","posicao":115,"conexao":[125,126]},{"elemento":"linha-recentralizadora-direita","posicao":106,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","1","0","0","1","0","0","0"],["0","0","1","1","0","0","1","0","0","0"],["0","0","1","1","0","0","0","0","0","0"],["0","0","1","0","0","0","0","0","0","0"],["0","0","0","1","0","0","0","0","0","0"],["0","0","1","0","0","1","0","0","0","0"],["0","0","1","1","0","1","0","0","0","0"],["0","0","0","1","0","1","0","0","0","0"],["0","0","1","0","0","0","1","0","0","0"]]}',
            // Fase 27
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"or","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-esquerda","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"not","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"not","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":126,"conexao":[136]},{"elemento":"and","posicao":115,"conexao":[125,126]},{"elemento":"linha-recentralizadora-esquerda","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"not","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","1","1","0","1","0","0","0","0"],["0","0","1","1","0","1","1","0","0","0"],["0","0","1","1","0","0","1","0","0","0"]]}',
            // Fase 28
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"cruz-quebrada-esquerda","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"and","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-direita","posicao":105,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"not","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]},{"elemento":"segundo-canto","posicao":133,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"not","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","1","0","0","0","0"]]}',
            // Fase 29
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"cruz-quebrada-esquerda","posicao":133,"conexao":[143]},{"elemento":"cruz-quebrada-direita","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"and","posicao":113,"conexao":[123,124]},{"elemento":"linha-recentralizadora-direita","posicao":104,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"not","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"segundo-canto","posicao":132,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"linha-central-vertical","posicao":102,"conexao":[112]},{"elemento":"not","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"primeiro-canto","posicao":135,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"not","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[143,144],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
            // Fase 30
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"cruz-quebrada-esquerda","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"segundo-canto","posicao":122,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"or","posicao":103,"conexao":[113,114]},{"elemento":"linha-recentralizadora-esquerda","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"linha-central-vertical","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"not","posicao":82,"conexao":[92]},{"elemento":"linha-central-vertical","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]}],"posicaoElementosIniciais":[143,144],"solucoesPossiveis":[["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 31
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"or","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-direita","posicao":123,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"quarto-canto","posicao":95,"conexao":[105]},{"elemento":"segundo-canto","posicao":94,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"and","posicao":83,"conexao":[93,94]},{"elemento":"linha-recentralizadora-esquerda","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]}],"posicaoElementosIniciais":[142,143,144,145],"solucoesPossiveis":[["0","0","1","1","1","1","0","0","0","0"],["0","0","0","1","1","1","0","0","0","0"],["0","0","1","0","1","1","0","0","0","0"]]}',
            // Fase 32
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"cruz-quebrada-esquerda","posicao":124,"conexao":[134]},{"elemento":"segundo-canto","posicao":123,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"or","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-esquerda","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"not","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"not","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"and","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-esquerda","posicao":126,"conexao":[136]},{"elemento":"not","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]},{"elemento":"linha-central-vertical","posicao":140,"conexao":[]},{"elemento":"linha-central-vertical","posicao":130,"conexao":[140]},{"elemento":"linha-central-vertical","posicao":120,"conexao":[130]},{"elemento":"not","posicao":110,"conexao":[120]},{"elemento":"linha-central-vertical","posicao":100,"conexao":[110]},{"elemento":"linha-central-vertical","posicao":90,"conexao":[100]},{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":131,"conexao":[141]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":111,"conexao":[121]},{"elemento":"linha-central-vertical","posicao":101,"conexao":[111]},{"elemento":"linha-central-vertical","posicao":91,"conexao":[101]},{"elemento":"or","posicao":80,"conexao":[90,91]},{"elemento":"linha-recentralizadora-esquerda","posicao":70,"conexao":[80]},{"elemento":"linha-central-vertical","posicao":60,"conexao":[70]},{"elemento":"linha-central-vertical","posicao":50,"conexao":[60]},{"elemento":"linha-central-vertical","posicao":40,"conexao":[50]},{"elemento":"linha-central-vertical","posicao":30,"conexao":[40]},{"elemento":"linha-central-vertical","posicao":20,"conexao":[30]},{"elemento":"linha-central-vertical","posicao":10,"conexao":[20]},{"elemento":"linha-central-vertical","posicao":0,"conexao":[10]}],"posicaoElementosIniciais":[145,144,146,147,140,141],"solucoesPossiveis":[["1","1","0","0","0","0","0","1","0","0"],["0","1","0","0","0","0","0","1","0","0"],["0","0","0","0","0","0","1","0","0","0"],["0","0","0","0","0","0","0","1","0","0"],["0","1","0","0","0","0","0","0","0","0"],["1","1","0","0","0","0","0","0","0","0"],["1","1","0","0","0","0","1","0","0","0"],["0","0","0","0","0","0","0","0","0","0"],["0","1","0","0","0","0","1","0","0","0"]]}',
            // Fase 33
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"or","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-esquerda","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"not","posicao":102,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":92,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"and","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-direita","posicao":126,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"quarto-canto","posicao":106,"conexao":[116]},{"elemento":"linha-central-horizontal","posicao":105,"conexao":[106]},{"elemento":"linha-central-horizontal","posicao":104,"conexao":[105]},{"elemento":"segundo-canto","posicao":103,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"and","posicao":82,"conexao":[92,93]},{"elemento":"linha-recentralizadora-esquerda","posicao":72,"conexao":[82]},{"elemento":"linha-central-vertical","posicao":62,"conexao":[72]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]}],"posicaoElementosIniciais":[142,143,145,146],"solucoesPossiveis":[["0","0","0","0","0","1","1","0","0","0"]]}',
            // Fase 34
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"or","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-direita","posicao":123,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-esquerda","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"and","posicao":103,"conexao":[113,114]},{"elemento":"linha-recentralizadora-direita","posicao":94,"conexao":[103]},{"elemento":"not","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[142,143,144,145],"solucoesPossiveis":[["0","0","0","1","0","1","0","0","0","0"],["0","0","0","1","1","0","0","0","0","0"],["0","0","1","0","0","1","0","0","0","0"],["0","0","0","0","0","1","0","0","0","0"],["0","0","1","0","0","0","0","0","0","0"],["0","0","1","1","1","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0"],["0","0","0","1","0","0","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"],["0","0","1","1","0","1","0","0","0","0"],["0","0","1","1","0","0","0","0","0","0"],["0","0","1","0","1","0","0","0","0","0"]]}',
            // Fase 35
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"and","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-direita","posicao":123,"conexao":[132]},{"elemento":"not","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"or","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-esquerda","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"and","posicao":93,"conexao":[103,104]},{"elemento":"linha-recentralizadora-esquerda","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]}],"posicaoElementosIniciais":[142,143,144,145],"solucoesPossiveis":[["0","0","0","1","1","0","0","0","0","0"],["0","0","1","0","1","1","0","0","0","0"],["0","0","1","0","0","1","0","0","0","0"],["0","0","0","0","0","1","0","0","0","0"],["0","0","1","0","1","0","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"],["0","0","0","1","1","1","0","0","0","0"],["0","0","0","1","0","1","0","0","0","0"]]}',
            // Fase 36
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"or","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-direita","posicao":103,"conexao":[112]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"not","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"not","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"or","posicao":114,"conexao":[124,125]},{"elemento":"linha-recentralizadora-direita","posicao":105,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"quarto-canto","posicao":85,"conexao":[95]},{"elemento":"segundo-canto","posicao":84,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"and","posicao":63,"conexao":[73,74]},{"elemento":"linha-recentralizadora-direita","posicao":54,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[142,143,144,145],"solucoesPossiveis":[["0","0","1","1","1","1","0","0","0","0"],["0","0","1","1","1","0","0","0","0","0"],["0","0","1","1","0","0","0","0","0","0"]]}',
            // Fase 37
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"or","posicao":131,"conexao":[141,142]},{"elemento":"linha-recentralizadora-direita","posicao":122,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":112,"conexao":[122]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"and","posicao":133,"conexao":[143,144]},{"elemento":"linha-recentralizadora-direita","posicao":124,"conexao":[133]},{"elemento":"quarto-canto","posicao":114,"conexao":[124]},{"elemento":"segundo-canto","posicao":113,"conexao":[114]},{"elemento":"and","posicao":102,"conexao":[112,113]},{"elemento":"linha-recentralizadora-direita","posicao":93,"conexao":[102]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"or","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-direita","posicao":126,"conexao":[135]},{"elemento":"not","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"linha-central-vertical","posicao":148,"conexao":[]},{"elemento":"and","posicao":137,"conexao":[147,148]},{"elemento":"linha-recentralizadora-esquerda","posicao":127,"conexao":[137]},{"elemento":"linha-central-vertical","posicao":117,"conexao":[127]},{"elemento":"linha-central-vertical","posicao":107,"conexao":[117]},{"elemento":"and","posicao":96,"conexao":[106,107]},{"elemento":"linha-recentralizadora-esquerda","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]}],"posicaoElementosIniciais":[141,142,143,144,145,146,147,148],"solucoesPossiveis":[["0","0","1","1","1","0","0","1","1","0"],["0","1","1","1","1","0","0","1","1","0"],["0","1","0","1","1","0","0","1","1","0"]]}',
            // Fase 38
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"or","posicao":132,"conexao":[142,143]},{"elemento":"linha-recentralizadora-direita","posicao":123,"conexao":[132]},{"elemento":"linha-central-vertical","posicao":113,"conexao":[123]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"quarto-canto","posicao":105,"conexao":[115]},{"elemento":"segundo-canto","posicao":104,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":103,"conexao":[113]},{"elemento":"and","posicao":93,"conexao":[103,104]},{"elemento":"linha-recentralizadora-esquerda","posicao":83,"conexao":[93]},{"elemento":"not","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"linha-central-vertical","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"or","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-direita","posicao":127,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":148,"conexao":[]},{"elemento":"linha-central-vertical","posicao":149,"conexao":[]},{"elemento":"and","posicao":138,"conexao":[148,149]},{"elemento":"linha-recentralizadora-esquerda","posicao":128,"conexao":[138]},{"elemento":"not","posicao":118,"conexao":[128]},{"elemento":"linha-central-vertical","posicao":117,"conexao":[127]},{"elemento":"linha-central-vertical","posicao":108,"conexao":[118]},{"elemento":"linha-central-vertical","posicao":107,"conexao":[117]},{"elemento":"and","posicao":97,"conexao":[107,108]},{"elemento":"linha-recentralizadora-direita","posicao":88,"conexao":[97]},{"elemento":"linha-central-vertical","posicao":78,"conexao":[88]},{"elemento":"linha-central-vertical","posicao":68,"conexao":[78]},{"elemento":"linha-central-vertical","posicao":58,"conexao":[68]},{"elemento":"linha-central-vertical","posicao":48,"conexao":[58]},{"elemento":"linha-central-vertical","posicao":38,"conexao":[48]},{"elemento":"linha-central-vertical","posicao":28,"conexao":[38]},{"elemento":"linha-central-vertical","posicao":18,"conexao":[28]},{"elemento":"linha-central-vertical","posicao":8,"conexao":[18]},{"elemento":"linha-central-vertical","posicao":140,"conexao":[]},{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"and","posicao":130,"conexao":[140,141]},{"elemento":"linha-recentralizadora-direita","posicao":121,"conexao":[130]},{"elemento":"linha-central-vertical","posicao":111,"conexao":[121]},{"elemento":"linha-central-vertical","posicao":101,"conexao":[111]},{"elemento":"linha-central-vertical","posicao":91,"conexao":[101]},{"elemento":"linha-central-vertical","posicao":81,"conexao":[91]},{"elemento":"linha-central-vertical","posicao":71,"conexao":[81]},{"elemento":"linha-central-vertical","posicao":61,"conexao":[71]},{"elemento":"linha-central-vertical","posicao":51,"conexao":[61]},{"elemento":"linha-central-vertical","posicao":41,"conexao":[51]},{"elemento":"linha-central-vertical","posicao":31,"conexao":[41]},{"elemento":"linha-central-vertical","posicao":21,"conexao":[31]},{"elemento":"linha-central-vertical","posicao":11,"conexao":[21]},{"elemento":"linha-central-vertical","posicao":1,"conexao":[11]}],"posicaoElementosIniciais":[142,143,144,145,146,147,148,149,140,141],"solucoesPossiveis":[["1","1","0","1","0","0","1","1","1","0"],["1","1","1","1","0","0","0","1","0","1"],["1","1","0","1","0","1","1","0","1","0"],["1","1","1","1","1","0","0","1","0","0"],["1","1","0","1","1","0","1","1","0","1"],["1","1","0","1","1","0","1","0","0","1"],["1","1","1","0","0","1","1","0","0","0"],["1","1","1","1","0","1","1","0","0","1"],["1","1","0","1","0","0","1","1","0","1"],["1","1","0","1","0","1","0","1","0","0"],["1","1","0","0","0","0","1","1","1","0"],["1","1","1","0","0","0","0","1","1","0"],["1","1","1","0","1","0","1","1","0","0"],["1","1","0","0","1","1","0","1","0","0"],["1","1","0","1","1","0","1","0","1","0"],["1","1","1","1","0","0","0","1","1","0"],["1","1","0","0","1","0","1","0","0","1"],["1","1","1","0","0","1","1","0","1","0"],["1","1","0","0","1","0","1","1","0","0"],["1","1","0","0","1","0","1","0","0","0"],["1","1","0","1","0","0","1","1","0","0"],["1","1","0","1","0","1","0","1","0","1"],["1","1","1","1","1","0","1","1","0","1"],["1","1","0","0","1","1","1","1","0","1"],["1","1","1","1","0","0","1","0","0","1"],["1","1","0","0","1","1","1","1","1","0"],["1","1","0","0","0","0","1","0","1","0"],["1","1","1","1","0","1","1","1","0","0"],["1","1","1","0","0","0","1","1","1","0"],["1","1","0","0","1","1","1","1","0","0"],["1","1","0","1","0","0","1","0","0","1"],["1","1","0","1","0","0","0","1","0","1"],["1","1","1","1","0","1","1","1","1","0"],["1","1","0","0","0","0","1","0","0","0"],["1","1","0","0","1","1","1","0","1","0"],["1","1","0","0","1","1","0","1","1","0"],["1","1","1","1","1","0","1","1","1","0"],["1","1","1","0","0","0","0","1","0","0"],["1","1","1","0","1","0","1","0","0","1"],["1","1","1","1","0","1","0","1","0","1"],["1","1","1","1","0","1","1","0","0","0"],["1","1","0","1","1","0","1","1","1","0"],["1","1","0","1","1","0","0","1","0","1"],["1","1","1","1","0","1","0","1","1","0"],["1","1","1","1","1","0","1","0","0","1"],["1","1","0","1","0","0","0","1","1","0"],["1","1","0","1","0","0","1","0","0","0"],["1","1","0","0","1","0","0","1","0","0"],["1","1","0","1","1","0","1","0","0","0"],["1","1","0","1","0","1","1","1","0","1"],["1","1","0","0","0","1","1","1","1","0"],["1","1","1","1","1","0","0","1","1","0"],["1","1","0","0","0","1","1","1","0","1"],["1","1","0","0","1","1","0","1","0","1"],["1","1","0","0","1","1","1","0","0","1"],["1","1","1","0","0","1","1","1","1","0"],["1","1","1","0","0","0","1","0","0","1"],["1","1","1","1","1","0","1","1","0","0"],["1","1","1","1","0","0","1","0","1","0"],["1","1","1","1","1","0","1","0","1","0"],["1","1","0","0","1","0","1","1","1","0"],["1","1","1","0","1","0","1","1","1","0"],["1","1","0","0","0","0","1","1","0","1"],["1","1","0","1","1","0","1","1","0","0"],["1","1","0","1","0","0","1","0","1","0"],["1","1","1","0","0","1","0","1","1","0"],["1","1","1","1","0","0","1","1","0","1"],["1","1","1","0","0","0","1","1","0","0"],["1","1","0","0","0","1","1","0","0","0"],["1","1","1","0","1","0","0","1","0","1"],["1","1","1","0","0","1","1","1","0","0"],["1","1","0","0","0","0","1","1","0","0"],["1","1","1","1","0","0","1","0","0","0"],["1","1","0","0","0","1","1","1","0","0"],["1","1","0","1","0","1","1","0","0","0"],["1","1","1","0","1","0","1","1","0","1"],["1","1","0","1","0","0","0","1","0","0"],["1","1","1","1","0","1","0","1","0","0"],["1","1","1","0","1","0","0","1","0","0"],["1","1","0","1","0","1","1","1","1","0"],["1","1","1","1","0","0","1","1","0","0"],["1","1","0","0","0","1","0","1","0","1"],["1","1","1","1","0","0","1","1","1","0"],["1","1","0","0","1","0","1","1","0","1"],["1","1","0","0","0","1","0","1","1","0"],["1","1","1","1","0","1","1","1","0","1"],["1","1","1","0","0","0","1","1","0","1"],["1","1","1","1","1","0","0","1","0","1"],["1","1","0","1","1","0","0","1","1","0"],["1","1","1","0","0","0","1","0","0","0"],["1","1","1","0","1","0","1","0","1","0"],["1","1","0","0","0","0","0","1","0","0"],["1","1","1","0","0","1","0","1","0","1"],["1","1","1","0","0","1","1","0","0","1"],["1","1","0","1","0","1","0","1","1","0"],["1","1","0","0","0","1","1","0","1","0"],["1","1","1","0","0","1","1","1","0","1"],["1","1","1","0","0","0","0","1","0","1"],["1","1","1","1","0","1","1","0","1","0"],["1","1","0","1","0","1","1","1","0","0"],["1","1","1","1","0","0","0","1","0","0"],["1","1","0","0","1","0","0","1","1","0"],["1","1","1","0","1","0","1","0","0","0"],["1","1","0","0","0","0","0","1","0","1"],["1","1","0","0","0","1","0","1","0","0"],["1","1","0","1","0","1","1","0","0","1"],["1","1","0","0","1","0","0","1","0","1"],["1","1","1","0","0","1","0","1","0","0"],["1","1","0","1","1","0","0","1","0","0"],["1","1","0","0","0","0","0","1","1","0"],["1","1","0","0","0","1","1","0","0","1"],["1","1","0","0","1","1","1","0","0","0"],["1","1","1","0","0","0","1","0","1","0"],["1","1","1","0","1","0","0","1","1","0"],["1","1","0","0","0","0","1","0","0","1"],["1","1","0","0","1","0","1","0","1","0"],["1","1","1","1","1","0","1","0","0","0"]]}',
            // Fase 39
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":140,"conexao":[]},{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"not","posicao":130,"conexao":[140]},{"elemento":"not","posicao":131,"conexao":[141]},{"elemento":"linha-central-vertical","posicao":120,"conexao":[130]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"or","posicao":110,"conexao":[120,121]},{"elemento":"linha-recentralizadora-direita","posicao":101,"conexao":[110]},{"elemento":"not","posicao":91,"conexao":[101]},{"elemento":"linha-central-vertical","posicao":81,"conexao":[91]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"or","posicao":112,"conexao":[122,123]},{"elemento":"linha-recentralizadora-direita","posicao":103,"conexao":[112]},{"elemento":"quarto-canto","posicao":93,"conexao":[103]},{"elemento":"segundo-canto","posicao":92,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"and","posicao":71,"conexao":[81,82]},{"elemento":"linha-recentralizadora-esquerda","posicao":61,"conexao":[71]},{"elemento":"linha-central-vertical","posicao":51,"conexao":[61]},{"elemento":"linha-central-vertical","posicao":41,"conexao":[51]},{"elemento":"linha-central-vertical","posicao":31,"conexao":[41]},{"elemento":"linha-central-vertical","posicao":21,"conexao":[31]},{"elemento":"linha-central-vertical","posicao":11,"conexao":[21]},{"elemento":"linha-central-vertical","posicao":1,"conexao":[11]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"or","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"and","posicao":136,"conexao":[146,147]},{"elemento":"linha-recentralizadora-esquerda","posicao":126,"conexao":[136]},{"elemento":"not","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"and","posicao":95,"conexao":[105,106]},{"elemento":"linha-recentralizadora-direita","posicao":86,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]},{"elemento":"linha-central-vertical","posicao":148,"conexao":[]},{"elemento":"linha-central-vertical","posicao":149,"conexao":[]},{"elemento":"or","posicao":138,"conexao":[148,149]},{"elemento":"linha-recentralizadora-esquerda","posicao":128,"conexao":[138]},{"elemento":"linha-central-vertical","posicao":118,"conexao":[128]},{"elemento":"not","posicao":108,"conexao":[118]},{"elemento":"linha-central-vertical","posicao":98,"conexao":[108]},{"elemento":"linha-central-vertical","posicao":88,"conexao":[98]},{"elemento":"linha-central-vertical","posicao":78,"conexao":[88]},{"elemento":"linha-central-vertical","posicao":68,"conexao":[78]},{"elemento":"linha-central-vertical","posicao":58,"conexao":[68]},{"elemento":"linha-central-vertical","posicao":48,"conexao":[58]},{"elemento":"linha-central-vertical","posicao":38,"conexao":[48]},{"elemento":"linha-central-vertical","posicao":28,"conexao":[38]},{"elemento":"linha-central-vertical","posicao":18,"conexao":[28]},{"elemento":"linha-central-vertical","posicao":8,"conexao":[18]}],"posicaoElementosIniciais":[140,141,142,143,144,145,146,147,148,149],"solucoesPossiveis":[["1","1","1","1","0","1","0","1","0","0"],["1","1","1","1","0","1","0","0","0","0"],["1","1","0","0","0","1","1","0","0","0"],["1","1","1","0","1","1","1","0","0","0"],["1","1","0","0","0","1","0","1","0","0"],["1","1","0","0","0","1","0","0","0","0"],["1","1","0","0","1","1","0","0","0","0"],["1","1","0","0","1","1","1","0","0","0"],["1","1","1","1","1","0","1","0","0","0"],["1","1","1","1","0","1","1","0","0","0"],["1","1","0","0","1","0","1","0","0","0"],["1","1","0","0","1","0","0","1","0","0"],["1","1","0","0","1","0","0","0","0","0"],["1","1","1","0","0","1","0","1","0","0"],["1","1","1","1","1","1","0","0","0","0"],["1","1","1","1","1","1","0","1","0","0"],["1","1","1","0","1","0","0","1","0","0"],["1","1","1","1","1","0","0","1","0","0"],["1","1","0","0","1","1","0","1","0","0"],["1","1","1","0","1","1","0","0","0","0"],["1","1","1","0","0","1","0","0","0","0"],["1","1","1","0","1","0","0","0","0","0"],["1","1","1","0","1","1","0","1","0","0"],["1","1","1","0","1","0","1","0","0","0"],["1","1","1","1","1","0","0","0","0","0"],["1","1","1","1","1","1","1","0","0","0"],["1","1","1","0","0","1","1","0","0","0"]]}',
            // Fase 40
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"not","posicao":131,"conexao":[141]},{"elemento":"linha-central-vertical","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"or","posicao":111,"conexao":[121,122]},{"elemento":"linha-recentralizadora-esquerda","posicao":101,"conexao":[111]},{"elemento":"not","posicao":91,"conexao":[101]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"not","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"or","posicao":113,"conexao":[123,124]},{"elemento":"linha-recentralizadora-esquerda","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":81,"conexao":[91]},{"elemento":"cruz-quebrada-esquerda","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"segundo-canto","posicao":92,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":82,"conexao":[92]},{"elemento":"or","posicao":71,"conexao":[81,82]},{"elemento":"linha-recentralizadora-direita","posicao":62,"conexao":[71]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"linha-central-vertical","posicao":73,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":63,"conexao":[73]},{"elemento":"not","posicao":53,"conexao":[63]},{"elemento":"linha-central-vertical","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":43,"conexao":[53]},{"elemento":"linha-central-vertical","posicao":33,"conexao":[43]},{"elemento":"linha-central-vertical","posicao":23,"conexao":[33]},{"elemento":"linha-central-vertical","posicao":13,"conexao":[23]},{"elemento":"linha-central-vertical","posicao":3,"conexao":[13]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"and","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-direita","posicao":126,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"linha-central-vertical","posicao":86,"conexao":[96]},{"elemento":"linha-central-vertical","posicao":76,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":66,"conexao":[76]},{"elemento":"linha-central-vertical","posicao":56,"conexao":[66]},{"elemento":"linha-central-vertical","posicao":46,"conexao":[56]},{"elemento":"linha-central-vertical","posicao":36,"conexao":[46]},{"elemento":"linha-central-vertical","posicao":26,"conexao":[36]},{"elemento":"linha-central-vertical","posicao":16,"conexao":[26]},{"elemento":"linha-central-vertical","posicao":6,"conexao":[16]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"linha-central-vertical","posicao":148,"conexao":[]},{"elemento":"or","posicao":137,"conexao":[147,148]},{"elemento":"linha-recentralizadora-esquerda","posicao":127,"conexao":[137]},{"elemento":"linha-central-vertical","posicao":117,"conexao":[127]},{"elemento":"linha-central-vertical","posicao":107,"conexao":[117]},{"elemento":"linha-central-vertical","posicao":97,"conexao":[107]},{"elemento":"not","posicao":87,"conexao":[97]},{"elemento":"linha-central-vertical","posicao":77,"conexao":[87]},{"elemento":"linha-central-vertical","posicao":67,"conexao":[77]},{"elemento":"not","posicao":57,"conexao":[67]},{"elemento":"linha-central-vertical","posicao":47,"conexao":[57]},{"elemento":"linha-central-vertical","posicao":37,"conexao":[47]},{"elemento":"linha-central-vertical","posicao":27,"conexao":[37]},{"elemento":"linha-central-vertical","posicao":17,"conexao":[27]},{"elemento":"linha-central-vertical","posicao":7,"conexao":[17]}],"posicaoElementosIniciais":[141,142,143,144,145,146,147,148],"solucoesPossiveis":[["0","1","0","1","1","1","1","1","1","0"],["0","1","0","1","1","1","1","0","1","0"],["0","1","0","1","1","1","1","1","0","0"]]}',
            // Fase 41
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"not","posicao":131,"conexao":[141]},{"elemento":"linha-central-vertical","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"or","posicao":111,"conexao":[121,122]},{"elemento":"linha-recentralizadora-esquerda","posicao":101,"conexao":[111]},{"elemento":"linha-central-vertical","posicao":91,"conexao":[101]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"and","posicao":113,"conexao":[123,124]},{"elemento":"linha-recentralizadora-esquerda","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"quarto-canto","posicao":83,"conexao":[93]},{"elemento":"segundo-canto","posicao":82,"conexao":[83]},{"elemento":"linha-central-vertical","posicao":81,"conexao":[91]},{"elemento":"or","posicao":71,"conexao":[81,82]},{"elemento":"linha-recentralizadora-direita","posicao":62,"conexao":[71]},{"elemento":"linha-central-vertical","posicao":52,"conexao":[62]},{"elemento":"not","posicao":42,"conexao":[52]},{"elemento":"linha-central-vertical","posicao":32,"conexao":[42]},{"elemento":"linha-central-vertical","posicao":22,"conexao":[32]},{"elemento":"linha-central-vertical","posicao":12,"conexao":[22]},{"elemento":"linha-central-vertical","posicao":2,"conexao":[12]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"not","posicao":137,"conexao":[147]},{"elemento":"linha-central-vertical","posicao":136,"conexao":[146]},{"elemento":"linha-central-vertical","posicao":127,"conexao":[137]},{"elemento":"cruz-quebrada-esquerda","posicao":126,"conexao":[136]},{"elemento":"linha-central-vertical","posicao":116,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":117,"conexao":[127]},{"elemento":"and","posicao":106,"conexao":[116,117]},{"elemento":"linha-recentralizadora-direita","posicao":97,"conexao":[106]},{"elemento":"not","posicao":87,"conexao":[97]},{"elemento":"linha-central-vertical","posicao":77,"conexao":[87]},{"elemento":"quarto-canto","posicao":67,"conexao":[77]},{"elemento":"segundo-canto","posicao":66,"conexao":[67]},{"elemento":"segundo-canto","posicao":125,"conexao":[126]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"and","posicao":55,"conexao":[65,66]},{"elemento":"linha-recentralizadora-esquerda","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[141,142,143,144,146,147],"solucoesPossiveis":[["0","1","0","1","1","0","1","1","0","0"],["0","1","0","0","0","0","1","1","0","0"],["0","1","0","1","0","0","1","1","0","0"]]}',
            // Fase 42
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"not","posicao":131,"conexao":[141]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"and","posicao":111,"conexao":[121,122]},{"elemento":"linha-recentralizadora-direita","posicao":102,"conexao":[111]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"not","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"and","posicao":113,"conexao":[123,124]},{"elemento":"linha-recentralizadora-esquerda","posicao":103,"conexao":[113]},{"elemento":"quarto-canto","posicao":92,"conexao":[102]},{"elemento":"segundo-canto","posicao":91,"conexao":[92]},{"elemento":"cruz-quebrada-esquerda","posicao":81,"conexao":[91]},{"elemento":"terceiro-canto","posicao":93,"conexao":[103]},{"elemento":"primeiro-canto","posicao":94,"conexao":[93]},{"elemento":"cruz-quebrada-direita","posicao":84,"conexao":[94]},{"elemento":"terceiro-canto","posicao":71,"conexao":[81]},{"elemento":"primeiro-canto","posicao":72,"conexao":[71]},{"elemento":"quarto-canto","posicao":74,"conexao":[84]},{"elemento":"segundo-canto","posicao":73,"conexao":[74]},{"elemento":"and","posicao":62,"conexao":[72,73]},{"elemento":"linha-recentralizadora-direita","posicao":53,"conexao":[62]},{"elemento":"segundo-canto","posicao":80,"conexao":[81]},{"elemento":"linha-central-vertical","posicao":70,"conexao":[80]},{"elemento":"linha-central-vertical","posicao":60,"conexao":[70]},{"elemento":"linha-central-vertical","posicao":50,"conexao":[60]},{"elemento":"linha-central-vertical","posicao":40,"conexao":[50]},{"elemento":"linha-central-vertical","posicao":30,"conexao":[40]},{"elemento":"primeiro-canto","posicao":85,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"quarto-canto","posicao":43,"conexao":[53]},{"elemento":"segundo-canto","posicao":42,"conexao":[43]},{"elemento":"t","posicao":32,"conexao":[42]},{"elemento":"segundo-canto","posicao":31,"conexao":[32]},{"elemento":"and","posicao":20,"conexao":[30,31]},{"elemento":"linha-recentralizadora-direita","posicao":11,"conexao":[20]},{"elemento":"linha-central-horizontal","posicao":33,"conexao":[32]},{"elemento":"primeiro-canto","posicao":34,"conexao":[33]},{"elemento":"and","posicao":24,"conexao":[34,35]},{"elemento":"linha-recentralizadora-esquerda","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]},{"elemento":"linha-central-vertical","posicao":1,"conexao":[11]}],"posicaoElementosIniciais":[141,142,143,144],"solucoesPossiveis":[["0","0","0","0","1","0","0","0","0","0"]]}',
            // Fase 43
            '{"listaElementos":[{"elemento":"linha-central-vertical","posicao":141,"conexao":[]},{"elemento":"linha-central-vertical","posicao":142,"conexao":[]},{"elemento":"not","posicao":131,"conexao":[141]},{"elemento":"not","posicao":132,"conexao":[142]},{"elemento":"linha-central-vertical","posicao":121,"conexao":[131]},{"elemento":"linha-central-vertical","posicao":122,"conexao":[132]},{"elemento":"or","posicao":111,"conexao":[121,122]},{"elemento":"linha-recentralizadora-esquerda","posicao":101,"conexao":[111]},{"elemento":"not","posicao":91,"conexao":[101]},{"elemento":"linha-central-vertical","posicao":81,"conexao":[91]},{"elemento":"linha-central-vertical","posicao":143,"conexao":[]},{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"not","posicao":134,"conexao":[144]},{"elemento":"linha-central-vertical","posicao":133,"conexao":[143]},{"elemento":"linha-central-vertical","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":123,"conexao":[133]},{"elemento":"or","posicao":113,"conexao":[123,124]},{"elemento":"linha-recentralizadora-esquerda","posicao":103,"conexao":[113]},{"elemento":"linha-central-vertical","posicao":93,"conexao":[103]},{"elemento":"linha-central-vertical","posicao":83,"conexao":[93]},{"elemento":"linha-central-vertical","posicao":71,"conexao":[81]},{"elemento":"quarto-canto","posicao":73,"conexao":[83]},{"elemento":"segundo-canto","posicao":72,"conexao":[73]},{"elemento":"and","posicao":61,"conexao":[71,72]},{"elemento":"linha-recentralizadora-esquerda","posicao":51,"conexao":[61]},{"elemento":"linha-central-vertical","posicao":41,"conexao":[51]},{"elemento":"linha-central-vertical","posicao":31,"conexao":[41]},{"elemento":"linha-central-vertical","posicao":21,"conexao":[31]},{"elemento":"linha-central-vertical","posicao":11,"conexao":[21]},{"elemento":"linha-central-vertical","posicao":1,"conexao":[11]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":146,"conexao":[]},{"elemento":"or","posicao":135,"conexao":[145,146]},{"elemento":"linha-recentralizadora-esquerda","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":147,"conexao":[]},{"elemento":"linha-central-vertical","posicao":148,"conexao":[]},{"elemento":"and","posicao":137,"conexao":[147,148]},{"elemento":"linha-recentralizadora-direita","posicao":128,"conexao":[137]},{"elemento":"quarto-canto","posicao":118,"conexao":[128]},{"elemento":"terceiro-canto","posicao":115,"conexao":[125]},{"elemento":"primeiro-canto","posicao":116,"conexao":[115]},{"elemento":"segundo-canto","posicao":117,"conexao":[118]},{"elemento":"not","posicao":107,"conexao":[117]},{"elemento":"linha-central-vertical","posicao":106,"conexao":[116]},{"elemento":"linha-central-vertical","posicao":97,"conexao":[107]},{"elemento":"linha-central-vertical","posicao":96,"conexao":[106]},{"elemento":"and","posicao":86,"conexao":[96,97]},{"elemento":"linha-recentralizadora-direita","posicao":77,"conexao":[86]},{"elemento":"linha-central-vertical","posicao":67,"conexao":[77]},{"elemento":"not","posicao":57,"conexao":[67]},{"elemento":"linha-central-vertical","posicao":47,"conexao":[57]},{"elemento":"linha-central-vertical","posicao":37,"conexao":[47]},{"elemento":"linha-central-vertical","posicao":27,"conexao":[37]},{"elemento":"linha-central-vertical","posicao":17,"conexao":[27]},{"elemento":"linha-central-vertical","posicao":7,"conexao":[17]},{"elemento":"linha-central-vertical","posicao":149,"conexao":[]},{"elemento":"linha-central-vertical","posicao":139,"conexao":[149]},{"elemento":"linha-central-vertical","posicao":129,"conexao":[139]},{"elemento":"linha-central-vertical","posicao":119,"conexao":[129]},{"elemento":"linha-central-vertical","posicao":109,"conexao":[119]},{"elemento":"linha-central-vertical","posicao":99,"conexao":[109]},{"elemento":"not","posicao":89,"conexao":[99]},{"elemento":"linha-central-vertical","posicao":79,"conexao":[89]},{"elemento":"linha-central-vertical","posicao":69,"conexao":[79]},{"elemento":"not","posicao":59,"conexao":[69]},{"elemento":"linha-central-vertical","posicao":49,"conexao":[59]},{"elemento":"linha-central-vertical","posicao":39,"conexao":[49]},{"elemento":"not","posicao":29,"conexao":[39]},{"elemento":"linha-central-vertical","posicao":19,"conexao":[29]},{"elemento":"linha-central-vertical","posicao":9,"conexao":[19]}],"posicaoElementosIniciais":[141,142,143,144,145,146,147,148,149],"solucoesPossiveis":[["0","1","1","1","0","0","0","0","1","0"],["0","1","1","1","1","0","1","1","1","0"],["0","1","1","0","0","1","1","1","1","0"],["0","1","1","1","0","0","0","0","0","0"],["0","1","1","1","1","0","0","1","1","0"],["0","1","1","1","1","0","0","1","0","0"],["0","1","1","0","0","0","0","0","0","0"],["0","1","1","1","0","1","1","1","1","0"],["0","1","1","1","0","0","0","1","0","0"],["0","1","1","1","1","1","1","1","1","0"],["0","1","1","1","0","0","1","1","1","0"],["0","1","1","1","0","0","0","1","1","0"],["0","1","1","0","0","1","0","1","1","0"],["0","1","1","1","1","0","0","0","0","0"],["0","1","1","0","0","0","0","0","1","0"],["0","1","1","0","0","0","0","1","0","0"],["0","1","1","0","0","0","0","1","1","0"],["0","1","1","0","0","0","1","1","1","0"],["0","1","1","1","1","1","0","1","1","0"],["0","1","1","1","0","1","0","1","1","0"],["0","1","1","1","1","0","0","0","1","0"]]}'

        ];

let perfilJogador = JSON.parse(localStorage.getItem('perfilJogador'));

if (!perfilJogador) {
    perfilJogador = {
        nome: 'Jogador',
        genero: 'm',
        nivel: 0,
        expAtual: 0,
        expProximoNivel: 25,
        itensInventario: [{categoria: 'titulo', valor: 'Pessoa comum', equipado: true}, {categoria: 'foto', valor: 'media/fogo.png', equipado: true}],
        quintetosDia: [], 
        conquistas: [],
        recordeFases: [0, 'facil'],
        recordeEstrelas: [0, 'facil'],
        recordeImpossivel: []
    };    
}

function salvaPerfilJogador() {
    localStorage.setItem('perfilJogador', JSON.stringify(perfilJogador));
}

function lidaNivelJogador(xp) {
    perfilJogador.expAtual += xp;
    if (perfilJogador.expAtual >= perfilJogador.expProximoNivel) {
        let valorSobressalente = 0;
        if (perfilJogador.expAtual > perfilJogador.expProximoNivel) {
            valorSobressalente = perfilJogador.expAtual - perfilJogador.expProximoNivel;
        }
        perfilJogador.nivel++;
        perfilJogador.expProximoNivel = (perfilJogador.nivel + 1) * 25;
        perfilJogador.expAtual = 0 + valorSobressalente;
        const mensagemUpou = document.getElementById('mensagemUpou');
        mensagemUpou.style.setProperty('display', 'block');
        mensagemUpou.innerText = 'Parabéns, você passou de nível!';
        executaEfeitoSonoro('fogo-1');
        setTimeout(() => {
            mensagemUpou.style.setProperty('display', 'none');
        }, 1500);
    }
    // salvaPerfilJogador();
    atualizaExibicaoPerfilJogador();
}

const btnSalvarPerfil = document.getElementById('btnSalvarPerfil');
btnSalvarPerfil.addEventListener('click', () => {
    atualizaNomeGeneroJogador();
});

function atualizaNomeGeneroJogador() {
    const inputNome = document.getElementById('inputNome');
    const selectGenero = document.getElementById('selectGenero');
    perfilJogador.nome = inputNome.value;
    perfilJogador.genero = selectGenero.value;
    atualizaExibicaoPerfilJogador();
    exibeToast('Perfil salvo com sucesso.', 0);
}

function atualizaExibicaoPerfilJogador() {
    const nomeJogador = document.getElementById('nomeJogador');
    const fotoJogador = document.getElementById('fotoJogador');
    const tituloJogador = document.getElementById('tituloJogador');
    const nivelJogador = document.getElementById('nivelJogador');
    const totalConquistasJogador = document.getElementById('totalConquistasJogador');
    const recordeFasesJogador = document.getElementById('recordeFasesJogador');
    const recordeEstrelasJogador = document.getElementById('recordeEstrelasJogador');
    const expAtualJogador = document.getElementById('expAtualJogador');
    const expProximoNivelJogador = document.getElementById('expProximoNivelJogador');
    const barraExpAtual = document.getElementById('barraExpAtual');

    nomeJogador.innerText = perfilJogador.nome;
    nivelJogador.innerText = perfilJogador.nivel;
    expAtualJogador.innerText = perfilJogador.expAtual;
    expProximoNivelJogador.innerText = perfilJogador.expProximoNivel;
    barraExpAtual.style.setProperty('width', `${(perfilJogador.expAtual / perfilJogador.expProximoNivel) * 100}%`);
    recordeFasesJogador.innerText = `${perfilJogador.recordeFases[0]} (no ${perfilJogador.recordeFases[1]})`;
    recordeEstrelasJogador.innerText = `${perfilJogador.recordeEstrelas[0]} (no ${perfilJogador.recordeEstrelas[1]})`;

    for (let i = 0; i < perfilJogador.itensInventario.length; i++) {
        if (perfilJogador.itensInventario[i].categoria === 'titulo' && perfilJogador.itensInventario[i].equipado) {
            tituloJogador.innerText = perfilJogador.itensInventario[i].valor;
        }
        if (perfilJogador.itensInventario[i].categoria === 'foto' && perfilJogador.itensInventario[i].equipado) {
            fotoJogador.setAttribute('src', perfilJogador.itensInventario[i].valor);
        }
    }
}

atualizaExibicaoPerfilJogador(perfilJogador);

let circuitosFeitos;

const body = document.querySelector('body');
const jogo = document.querySelector('#jogo');
const circuito = document.querySelector('#circuito');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const btnProximo = document.querySelector('#btnProximo');
const estrelas = document.querySelector('#estrelas');
const comentarioEstrelas = document.querySelector('#comentarioEstrelas');
const btnJogar = document.querySelector('#btnJogar');
const modalInicial = document.querySelector('#modalInicial');
const mensagem = document.querySelector('#mensagem');
const bateria = document.querySelector('#bateria');
const tempo = document.querySelector('#tempo');
const fase = document.querySelector('#fase');
const desempenho = document.querySelector('#desempenho');
const pontuacao = document.querySelector('#pontuacao');
const infoMusica = document.querySelector('#infoMusica');
const play = document.querySelector('#play');
const modalAjuda = document.querySelector('#modalAjuda');
const opcaoAjuda = document.querySelector('#opcaoAjuda');
const opcaoMenu = document.querySelector('#opcaoMenu');
const btnEntendi = document.querySelector('#btnEntendi');
const iconeFecharModalInicial = document.querySelector('#iconeFecharModalInicial');
const btnVoltar = document.querySelector('#btnVoltar');
const checkboxDesativarEfeitosSonoros = document.querySelector('#checkboxDesativarEfeitosSonoros');

let desativarEfeitosSonoros = false;

let limiteFases = 3;

let elementosLinhasPagina = ['linha-central-vertical', 'linha-central-horizontal', 'linha-lateral-direita', 'linha-lateral-esquerda', 'linha-recentralizadora-direita', 'linha-recentralizadora-esquerda', 'primeiro-canto', 'segundo-canto', 'terceiro-canto', 'quarto-canto', 'cruz', 'cruz-quebrada-direita', 'cruz-quebrada-esquerda', 't'];

let elementosPortoesPagina = ['primeiro-and', 'segundo-and', 'primeiro-or', 'segundo-or', 'primeiro-nand', 'segundo-nand', 'primeiro-nor', 'segundo-nor', 'primeiro-xor', 'segundo-xor', 'primeiro-xnor', 'segundo-xnor'];

const elementosPagina = document.querySelector('#elementosPagina');

function uneArrays(lista1, lista2) {
    let uniao = [];

    for (let i = 0; i < lista1.length; i++) {
        uniao.push(lista1[i]);
    }

    for (let i = 0; i < lista2.length; i++) {
        uniao.push(lista2[i]);
    }

    return uniao; 
}

function complementaNomes(lista, complemento) {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = `${lista[i]}${complemento}`;
    }

    return lista;
}

function duplicaNomesComplemento(lista, complemento) {
    let listaComplementada = [];

    for (let i = 0; i < lista.length; i++) {
        listaComplementada.push(`${lista[i]}`);
    }

    for (let i = 0; i < lista.length; i++) {
        listaComplementada.push(`${lista[i]}${complemento}`);
    }

    return listaComplementada;
}

elementosLinhasPagina = duplicaNomesComplemento(elementosLinhasPagina, '-on');
elementosLinhasPagina = complementaNomes(elementosLinhasPagina, '.png');
elementosPortoesPagina = complementaNomes(elementosPortoesPagina, '.png');

let listaElementosPagina = uneArrays(elementosLinhasPagina, elementosPortoesPagina);

for (let i = 0; i < listaElementosPagina.length; i++) {
    const img = document.createElement('img');
    img.setAttribute('src', `media/elementos/${listaElementosPagina[i]}`);
    elementosPagina.append(img);
}

let circuitoAtual = 0;
let circuitosPassados = 0;
let tempoInicial = 31; // segundos
let tempoCorrente;
let qtdeInicialBateria = 0;
let qtdeBateria = 0;
let vitoria = false;
let derrota = false;
let estadoInicial, solucaoPerfeita;
let valorPontuacao = 0;
let totalPerfeitos = 0;
let maximoPerfeitos = 0;
let nomeMusica = 'Cosmic Drift';
let nomeAutor = 'DivKid';
let elementosPorColuna = 10;
let quantidadeElementos = 150;
let dificuldade, modoJogo;
let intervaloTemporizador;
let fimJogo = false;

const musicaFundo = new Audio(`media/efeitos-sonoros/${nomeMusica} - ${nomeAutor}.mp3`);
infoMusica.textContent = `Você está ouvindo "${nomeMusica}" por ${nomeAutor}`;

function temporizador() {
    clearInterval(intervaloTemporizador);
	intervaloTemporizador = setInterval(() => {
		if (tempoCorrente > 0) {
			if (tempoCorrente >= 10) {
				tempo.innerText = `${--tempoCorrente}`;
			} else {
				tempo.innerText = `${--tempoCorrente}`;
			}
		} else {
            lidaDerrota('tempo');
		}
	}, 1000);
}

btnJogar.addEventListener('click', () => {
    executaEfeitoSonoro('fogo-0');
    limiteFases = parseInt(document.querySelector('#limiteFases').value);

    if (limiteFases == 0 || !limiteFases) {
        limiteFases = Number.POSITIVE_INFINITY;
    }
    circuitoAtual = 0; 
    circuitosPassados = 0;
    tempoInicial = 0;
    tempoCorrente = 0;
    qtdeInicialBateria = 0;
    qtdeBateria = 0;
    vitoria = false;
    derrota = false;
    valorPontuacao = 0;
    totalPerfeitos = 0;
    maximoPerfeitos = 0;
    mensagem.style.setProperty('display', 'none');
    fimJogo = false;
	modalInicial.style.setProperty('display', 'none');
    dificuldade = document.querySelector('input[name="radioDificuldade"]:checked').value;
    modoJogo = document.querySelector('input[name="radioModoJogo"]:checked').value;
    desempenho.innerText = '0.00%'
    limpaEstrelas();
    limpaCircuito();
    btnProximo.style.setProperty('display', 'none');
    document.querySelector('#pPontuacao').style.setProperty('display', 'block');
    document.querySelector('#pDesempenho').style.setProperty('display', 'block');
    document.querySelector('#pFase').style.setProperty('display', 'block');
    btnVoltar.style.setProperty('display', 'block');
    if (dificuldade === 'dificil') {
        tempoInicial = 20;
    } else if (dificuldade === 'muito-dificil') {
        tempoInicial = 10;
    } else {
        tempoInicial = 30;
    }

 	if (modoJogo === 'treino') {
        document.querySelector('#pPontuacao').style.setProperty('display', 'none');
        document.querySelector('#pDesempenho').style.setProperty('display', 'none');

 		tempoInicial = 1000;
 	}

    if (modoJogo === 'infinito' || modoJogo === 'treino') {
        document.querySelector('#pFase').style.setProperty('display', 'none');
    }

    if (modoJogo === 'progressivo' || modoJogo === 'infinito') {
        circuitosFeitos = todosCircuitos;
    } else if (modoJogo === 'treino') {
    	circuitosFeitos = [
    	'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"linha-central-vertical","posicao":135,"conexao":[145]},{"elemento":"linha-central-vertical","posicao":125,"conexao":[135]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"not","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"and","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","1","1","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"or","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-esquerda","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"nand","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","1","0","0","0","0","0"],["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"xor","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","1","0","0","0","0"],["0","0","0","0","1","0","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"nor","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-direita","posicao":125,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":115,"conexao":[125]},{"elemento":"linha-central-vertical","posicao":105,"conexao":[115]},{"elemento":"linha-central-vertical","posicao":95,"conexao":[105]},{"elemento":"linha-central-vertical","posicao":85,"conexao":[95]},{"elemento":"linha-central-vertical","posicao":75,"conexao":[85]},{"elemento":"linha-central-vertical","posicao":65,"conexao":[75]},{"elemento":"linha-central-vertical","posicao":55,"conexao":[65]},{"elemento":"linha-central-vertical","posicao":45,"conexao":[55]},{"elemento":"linha-central-vertical","posicao":35,"conexao":[45]},{"elemento":"linha-central-vertical","posicao":25,"conexao":[35]},{"elemento":"linha-central-vertical","posicao":15,"conexao":[25]},{"elemento":"linha-central-vertical","posicao":5,"conexao":[15]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"]]}',
		'{"listaElementos":[{"elemento":"linha-central-vertical","posicao":144,"conexao":[]},{"elemento":"linha-central-vertical","posicao":145,"conexao":[]},{"elemento":"xnor","posicao":134,"conexao":[144,145]},{"elemento":"linha-recentralizadora-esquerda","posicao":124,"conexao":[134]},{"elemento":"linha-central-vertical","posicao":114,"conexao":[124]},{"elemento":"linha-central-vertical","posicao":104,"conexao":[114]},{"elemento":"linha-central-vertical","posicao":94,"conexao":[104]},{"elemento":"linha-central-vertical","posicao":84,"conexao":[94]},{"elemento":"linha-central-vertical","posicao":74,"conexao":[84]},{"elemento":"linha-central-vertical","posicao":64,"conexao":[74]},{"elemento":"linha-central-vertical","posicao":54,"conexao":[64]},{"elemento":"linha-central-vertical","posicao":44,"conexao":[54]},{"elemento":"linha-central-vertical","posicao":34,"conexao":[44]},{"elemento":"linha-central-vertical","posicao":24,"conexao":[34]},{"elemento":"linha-central-vertical","posicao":14,"conexao":[24]},{"elemento":"linha-central-vertical","posicao":4,"conexao":[14]}],"posicaoElementosIniciais":[144,145],"solucoesPossiveis":[["0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","1","1","0","0","0","0"]]}'
	];
    }

    play.classList.remove('bi-play');
    play.classList.add('bi-pause');
    musicaFundo.play(); musicaFundo.loop = true;

	infoMusica.style.setProperty('display', 'block');
	setTimeout(() => {
		infoMusica.style.setProperty('display', 'none');
	}, 3000);

	leCircuito(JSON.parse(circuitosFeitos[circuitoAtual]));
	fase.innerText = circuitoAtual + 1;
	temporizador();
});

play.addEventListener('click', () => {
	if (play.classList.contains('bi-pause')) {
		play.classList.remove('bi-pause');
		play.classList.add('bi-play');
		musicaFundo.pause();
	} else {
		play.classList.remove('bi-play');
		play.classList.add('bi-pause');
        musicaFundo.play();
	}
});

let circuitoAnterior;
btnProximo.addEventListener('click', () => {
    tempo.innerText = tempoInicial;
    if (modoJogo === 'progressivo') {
        if (circuitoAtual < circuitosFeitos.length - 1 && circuitoAtual < limiteFases - 1) {
            if (derrota) {
                if (dificuldade === 'normal') {
                    circuitoAtual = circuitoAtual;
                } else if (dificuldade === 'dificil') {
                    if (circuitoAtual > 0) {
                        circuitoAtual--;
                    } else {
                        circuitoAtual = 0;
                    }
                } else if (dificuldade === 'muito-dificil') {
                     if (circuitoAtual > 1) {
                        circuitoAtual -= 2;
                    } else {
                        circuitoAtual = 0;
                    }                   
                }
            } else {
                circuitoAtual++;
                if (circuitoAtual > perfilJogador.recordeFases[0]) {
                    perfilJogador.recordeFases[0] = circuitoAtual;
                    perfilJogador.recordeFases[1] = dificuldade;
                }
            }
            fase.innerText = circuitoAtual + 1;
        } else {
            if (!fimJogo) {
                lidaTotalPerfeitos(false);
                let valorDesempenho = parseFloat((desempenho.innerText).split('%')[0]);
                let textoFinal;

                if (valorDesempenho <= 33.33) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Você chegou ao fim com certa dificuldade, mas não desanime. Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeito(s) seguidos.`;
                    if (!desativarEfeitosSonoros) {
                        executaEfeitoSonoro('fracasso');
                    }
                } else if (valorDesempenho > 33.33 && valorDesempenho <= 66.66) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Olha, você não foi mal! Continue praticando! Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    if (!desativarEfeitosSonoros) {
                        executaEfeitoSonoro('fogo-0');
                    }
                } else if (valorDesempenho > 66.66 && valorDesempenho < 99.99) {
                    mensagem.style.setProperty('background-color', 'teal');
                    textoFinal = `Impressionante! Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    if (!desativarEfeitosSonoros) {
                        executaEfeitoSonoro('super-sucesso');
                    }
                } else {
                    mensagem.style.setProperty('background-color', 'darkgreen');
                    mensagem.style.setProperty('box-shadow', '0 0 100px green');
                    textoFinal = `Você é mesmo humano? Seu desempenho foi de ${desempenho.innerText}, com o máximo obtido de ${maximoPerfeitos} perfeitos seguidos.`;
                    if (!desativarEfeitosSonoros) {
                        executaEfeitoSonoro('fogo-2');
                    }
                }

                mensagem.innerText = textoFinal;
                mensagem.style.setProperty('display', 'block');
                fimJogo = true;
            }
        }
    } else {
        let circuitoSorteado;
        if (circuitosFeitos.length > 1) {
            do {
                circuitoSorteado = getRandomIntInclusive(0, circuitosFeitos.length - 1);
            } while(circuitoSorteado === circuitoAnterior);
        } else {
            circuitoSorteado = getRandomIntInclusive(0, circuitosFeitos.length - 1);
        }
        circuitoAtual = circuitoSorteado;
        circuitoAnterior = circuitoSorteado;
    }

    if (!fimJogo) {
        vitoria = false;
        derrota = false;
        mensagem.style.setProperty('display', 'none');
        btnProximo.style.setProperty('display', 'none');
        limpaEstrelas();
        leCircuito(JSON.parse(circuitosFeitos[circuitoAtual]));
        temporizador(); 
    }

});

function exibeBtnProximo() {
	btnProximo.style.setProperty('animation', 'pulso infinite 1s');
	btnProximo.style.setProperty('display', 'block');
}

function limpaEstrelas() {
    estrelas.style.setProperty('display', 'none');
	const listaEstrelas = document.querySelectorAll('.estrela');
	for (let i = 0; i < listaEstrelas.length; i++) {
		listaEstrelas[i].remove();
	}
}

function colocaEstrelas(qtde, vazias = false) {
	if (!vazias) {
		for (let i = 0; i < qtde; i++) {
			let icone = document.createElement('i');
			icone.classList.add('estrela', 'bi', 'bi-star-fill');
			estrelas.appendChild(icone);
		}
	} else {
		for (let i = 0; i < qtde; i++) {
			let icone = document.createElement('i');
			icone.classList.add('estrela', 'bi', 'bi-star');
			estrelas.appendChild(icone);
		}
	}
}

function exibeEstrelas() {
	let qtdeCliques = qtdeInicialBateria - qtdeBateria;
	let totalEstrelas = 0;

	let percentual = (tempoCorrente / tempoInicial) * 100;

	if (percentual >= 30) {
		totalEstrelas += 1;
	} if (percentual >= 40) {
		totalEstrelas += 1;
	} if (percentual >= 50) {
		totalEstrelas += 1;
	} if (percentual >= 75) {
		totalEstrelas += 1;
	} if (percentual >= 90) {
		totalEstrelas += 1;
	}

	if (dificuldade == 'normal') {
		if (qtdeCliques >= qtdeInicialBateria) {
			totalEstrelas--;
		}
	} else {
		if (qtdeCliques > qtdeInicialBateria) {
			totalEstrelas--;
		}
	}

	if (totalEstrelas === 5) {
		comentarioEstrelas.innerText = 'Perfeito!';
		colocaEstrelas(5);
	} else if (totalEstrelas === 4) {
		colocaEstrelas(4);
		colocaEstrelas(1, true);
		comentarioEstrelas.innerText = 'Bom!';
	} else if (totalEstrelas === 3) {
		colocaEstrelas(3);
		colocaEstrelas(2, true);
		comentarioEstrelas.innerText = 'Razoável';
	} else if (totalEstrelas === 2) {
		colocaEstrelas(2);
		colocaEstrelas(3, true);
		comentarioEstrelas.innerText = 'Ruim';
	} else if (totalEstrelas === 1) {
		colocaEstrelas(1);
		colocaEstrelas(4, true);
		comentarioEstrelas.innerText = 'Muito ruim!';
	} else {
        colocaEstrelas(5, true);
        comentarioEstrelas.innerText = 'Horrível.';
    }

	if (totalEstrelas < 5) {
		lidaTotalPerfeitos();
	}

	if (totalEstrelas >= 3) {
		if (!desativarEfeitosSonoros) {
            executaEfeitoSonoro('completou');
        }

	} else {
		if (!desativarEfeitosSonoros) {
            executaEfeitoSonoro('gelo', 'mp3');
        }
	}

	valorPontuacao += totalEstrelas;

    if (valorPontuacao > perfilJogador.recordeEstrelas[0]) {
        perfilJogador.recordeEstrelas[0] = valorPontuacao;
        perfilJogador.recordeEstrelas[1] = dificuldade;
    }

	pontuacao.innerText = valorPontuacao;
	estrelas.style.setProperty('display', 'block');

    return totalEstrelas;
}

function lidaTotalPerfeitos(reseta = true) {
	if (totalPerfeitos > maximoPerfeitos) {
		maximoPerfeitos = totalPerfeitos;
	}

	if (reseta) {
		totalPerfeitos = 0;
	} else {
		totalPerfeitos++;
	}
}

function atualizaBateria() {
	if (qtdeBateria >= 0 && !vitoria && !derrota) {
		bateria.innerText = --qtdeBateria;
	}
}

function defineBateria(estadoInicial, solucaoPerfeita) {
	// ao notar cada diferença entre o estadoInicial e a solucaoPerfeita é que se encontra a quantidade de cliques necessária para finalizar o circuito em questão
	let total = 0;
	for (let i = 0; i < estadoInicial.length; i++) {
		if (estadoInicial[i] !== solucaoPerfeita[i]) {
			total++;
		}
	}

    let bonus;
    if (dificuldade === 'normal') {
        bonus = 1;
    } else if (dificuldade === 'dificil' || dificuldade === 'muito-dificil') {
        bonus = 0;
    }

    if (modoJogo === 'treino') {
    	bonus += 100;
    }

	return total + bonus;
}

// cria os espaços do circuito
function criaEspacosCircuito() {
	for (let i = 0; i < quantidadeElementos; i++) {
		const espacoElemento = document.createElement('div');
		espacoElemento.setAttribute('title', `${i}`);
		espacoElemento.classList.add('espacoElemento');
		circuito.appendChild(espacoElemento);
	}
}
// coloca os inputs
function criaInputsCircuito() {
	for (let i = 0; i < elementosPorColuna; i++) {
		const div = document.createElement('div');
		div.classList.add('input');
		div.innerText = 0;
		input.appendChild(div); // input é a div com flexbox
	}
}

function defineInputsCircuito(estadoInicial = '[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]') {
	// também serve para resetá-los
	estadoInicial = JSON.parse(estadoInicial);
	const inputs = [... document.querySelectorAll('.input')];
	inputs.forEach((input, index) => {
		if (estadoInicial[index] === '0') {
			input.style.setProperty('color', 'tomato');
		} else {
			input.style.setProperty('color', 'seagreen');
			if (espacosElementos[index + 140].classList.contains('elementoPresente')) {
				espacosElementos[index + 140].classList.add('on');
				espacosElementos[index + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical-on.png")';
			}
		}
		input.innerText = estadoInicial[index];
	});
}

criaEspacosCircuito();
criaInputsCircuito();

const espacosElementos = [... document.querySelectorAll('.espacoElemento')];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estadosIguais(estadoInicial, solucaoPerfeita) {
    let iguais = true;
    for (let i = 0; i < estadoInicial.length; i++) {
        if (estadoInicial[i] !== solucaoPerfeita[i]) {
            iguais = false;
            break;
        }
    }
    return iguais;
}

function pegaMenorValor(lista) {
	let menor = Number.POSITIVE_INFINITY;

	for (let i = 0; i < lista.length; i++) {
		if (lista[i] < menor) {
			menor = lista[i];
		}
	}

	return menor;
}

function criaEstadoInicial(solucoesPossiveis, posicaoElementosIniciais) {
    let estadoInicial = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

    let fim = false;
    while (!fim) {
        for (let i = 0; i < posicaoElementosIniciais.length; i++) {
            estadoInicial[posicaoElementosIniciais[i] - 140] = getRandomIntInclusive(0, 1).toString();
        }

        let igual = false;
        for (let i = 0; i < solucoesPossiveis.length; i++) {
            if (estadosIguais(estadoInicial, solucoesPossiveis[i])) {
                igual = true;
            }
        }

        if (!igual) {
            fim = true;
        }
    }


    let quantidadesBaterias = [];
    for (let i = 0; i < solucoesPossiveis.length; i++) {
    	quantidadesBaterias.push(defineBateria(estadoInicial, solucoesPossiveis[i]));
    }

    let quantidadeBateria = pegaMenorValor(quantidadesBaterias);

    return [estadoInicial, quantidadeBateria];
}

function limpaCircuito() {
	for (let i = 0; i < espacosElementos.length; i++) {
		espacosElementos[i].style.backgroundImage = "none";
		espacosElementos[i].classList.remove('elementoPresente');
		espacosElementos[i].classList.remove('on');
	}
}

// apenas lê o array com os objetos do circuito e insere os backgrounds nas devidas posições
function leCircuito(circuitoJSON) {
	circuitosPassados++;
	limpaCircuito();
	tempoCorrente = tempoInicial;
	let resultadoCriacaoEstadoInicial = criaEstadoInicial(circuitoJSON.solucoesPossiveis, circuitoJSON.posicaoElementosIniciais);
    let estadoInicial = resultadoCriacaoEstadoInicial[0];
    qtdeBateria = resultadoCriacaoEstadoInicial[1]
    defineInputsCircuito(JSON.stringify(estadoInicial));
	qtdeInicialBateria = qtdeBateria;
	bateria.innerText = qtdeBateria;
	circuitoJSON = circuitoJSON.listaElementos;

	for (let i = 0; i < circuitoJSON.length; i++) {
		let simples = false;
		if (circuitoJSON[i].elemento === 'and') {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-and.png')";
			espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-and.png')";
		} else if (circuitoJSON[i].elemento === 'or') {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-or.png')";
			espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-or.png')";
		} else if (circuitoJSON[i].elemento === 'nand') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-nand.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-nand.png')";
        } else if (circuitoJSON[i].elemento === 'nor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-nor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-nor.png')";
        } else if (circuitoJSON[i].elemento === 'xor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-xor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-xor.png')";
        } else if (circuitoJSON[i].elemento === 'xnor') {
            espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = "url('media/elementos/primeiro-xnor.png')";
            espacosElementos[circuitoJSON[i].posicao + 1].style.backgroundImage = "url('media/elementos/segundo-xnor.png')";
        } else {
			espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url('media/elementos/${circuitoJSON[i].elemento}.png')`;
			simples = true;
		}

		if (simples) {
			espacosElementos[circuitoJSON[i].posicao].classList.add('elementoPresente');
		} else {
			espacosElementos[circuitoJSON[i].posicao].classList.add('elementoPresente');
			espacosElementos[circuitoJSON[i].posicao + 1].classList.add('elementoPresente');
		}
	}
	propaga(circuitoJSON);
	alteraOutput();
}

function propaga(circuitoJSON) {
	const inputs = document.querySelectorAll('.input');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].innerText === '1' && espacosElementos[i + 140].classList.contains('elementoPresente')) {
			espacosElementos[i + 140].classList.add('on');
			if (dificuldade !== 'muito-dificil') {
                espacosElementos[i + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical-on.png")';
            }
		} else if (espacosElementos[i + 140].classList.contains('elementoPresente')) {
			espacosElementos[i + 140].classList.remove('on');
			espacosElementos[i + 140].style.backgroundImage = 'url("media/elementos/linha-central-vertical.png")';
		}		
	}

	for (let i = 0; i < circuitoJSON.length; i++) {
		let nomeElemento = circuitoJSON[i].elemento.split('-');
		// linhas normais
		if (nomeElemento.includes('linha') || nomeElemento.includes('canto') || nomeElemento.includes('cruz') || nomeElemento.includes('t')) {
			// se tem conexão 0, é porque é um dos primeiros elementos
			if (circuitoJSON[i].conexao.length !== 0) {
                if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on')) {
                    espacosElementos[circuitoJSON[i].posicao].classList.add('on');
                    if (dificuldade !== 'muito-dificil') {
                        espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url(media/elementos/${circuitoJSON[i].elemento}-on.png)`;
                    }
                } else {
                    espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
                    espacosElementos[circuitoJSON[i].posicao].style.backgroundImage = `url(media/elementos/${circuitoJSON[i].elemento}.png)`;
                }
			}
		}
		// not: inverte
		if (circuitoJSON[i].elemento === 'not') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			}
		}
		// and: ambas devem ser verdadeiras
		if (circuitoJSON[i].elemento === 'and') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			}
		}
		// or: pelo menos uma deve ser verdadeira
		if (circuitoJSON[i].elemento === 'or') {
			if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') || espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
				espacosElementos[circuitoJSON[i].posicao].classList.add('on');
			} else {
				espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
			}
		}
        // nand: falsa se ambas verdadeiras
        if (circuitoJSON[i].elemento === 'nand') {
            if (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            }
        }
        // nor: nenhuma deve ser verdadeira
        if (circuitoJSON[i].elemento === 'nor') {
            if (!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // xor: só uma pode ser verdadeira
        if (circuitoJSON[i].elemento === 'xor') {
            if ((espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) || (!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on'))) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // xnor: ou ambas falsas ou ambas verdadeiras
        if (circuitoJSON[i].elemento === 'xnor') {
            if ((!espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && !espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on')) || (espacosElementos[circuitoJSON[i].conexao[0]].classList.contains('on') && espacosElementos[circuitoJSON[i].conexao[1]].classList.contains('on'))) {
                espacosElementos[circuitoJSON[i].posicao].classList.add('on');
            } else {
                espacosElementos[circuitoJSON[i].posicao].classList.remove('on');
            }
        }
        // fim
	}
}

function calculaDesempenho() {
	desempenho.innerText = `${ (( valorPontuacao / (circuitosPassados * 5)) * 100).toFixed(2) }%`;
}

function lidaVitoria() {
    jogo.style.setProperty('box-shadow', '2px 2px 100px seagreen');
    btnProximo.style.setProperty('background-color', 'seagreen');
    vitoria = true;
    clearInterval(intervaloTemporizador);
    exibeBtnProximo();
    if (modoJogo !== 'treino') {
        let xp = exibeEstrelas();
        lidaNivelJogador(xp);
        calculaDesempenho();
        lidaTotalPerfeitos(false);

        let elogios = ['Uau!', 'Incrível!', 'Fabuloso!', 'Impressionante.', 'Estou sem palavras.', 'Você é mesmo humano?'];
        if (totalPerfeitos % 3 === 0) {
            let elogio = elogios[getRandomIntInclusive(0, elogios.length - 1)];
            exibeToast(`${elogio} ${totalPerfeitos} perfeitos seguidos!`, totalPerfeitos);
        }
    }
}

function lidaDerrota(tipo) {
    if (tipo === 'bateria') {
        mensagem.innerText = 'A sua bateria acabou :(';
        if (!desativarEfeitosSonoros) {
            executaEfeitoSonoro('bateria', 'mp3');
        }
    } else if (tipo === 'tempo') {
        mensagem.innerText = 'O seu tempo acabou :(';
        if (!desativarEfeitosSonoros) {
            executaEfeitoSonoro('fracasso');
        }
    }

    mensagem.style.setProperty('background-color', 'brown');
    mensagem.style.setProperty('box-shadow', 'none');
    mensagem.style.setProperty('display', 'block');
    clearInterval(intervaloTemporizador);
    derrota = true;
    lidaTotalPerfeitos();
    calculaDesempenho();
    exibeBtnProximo();
}

function alteraOutput() {
	let verdadeiro = true;
	for (let i = 0; i < 10; i++) {
		if (espacosElementos[i].classList.contains('elementoPresente') || espacosElementos[i].classList.contains('elemento-presente')) {
			if (!espacosElementos[i].classList.contains('on')) {
				verdadeiro = false;
			}
		}
	}

	if (verdadeiro) {
		output.innerText = 'Verdadeiro';
		output.style.backgroundColor = 'seagreen';
        lidaVitoria();
	} else {
		output.innerText = 'Falso';
		output.style.backgroundColor = 'tomato';
		jogo.style.setProperty('box-shadow', '2px 2px 100px tomato');
		btnProximo.style.setProperty('background-color', 'tomato');
	}
}

// event listeners nos inputs, bem como ativação do elemento imediatamente superior a cada um
const inputs = document.querySelectorAll('.input');
for (let i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', () => {
		if ((qtdeBateria > 0 && !vitoria && !derrota) || modoJogo === 'treino') {
			if (inputs[i].innerText === '0') {
				if (!desativarEfeitosSonoros) {
                    executaEfeitoSonoro('1');
                }
				inputs[i].innerText = '1';
				inputs[i].style.setProperty('color', 'seagreen');
			} else if (inputs[i].innerText === '1') {
				if (!desativarEfeitosSonoros) {
                    executaEfeitoSonoro('0');
                }
				inputs[i].style.setProperty('color', 'tomato');
				inputs[i].innerText = '0';
			}
			atualizaBateria();
			propaga(JSON.parse(circuitosFeitos[circuitoAtual]).listaElementos);
			alteraOutput();
		} else if (qtdeBateria === 0 && !derrota && !vitoria && modoJogo !== 'treino') {
            lidaDerrota('bateria');
		}
	});
}

function exibeToast(mensagem, valor = -1) {
	const toast = document.getElementById('toast');
	toast.style.setProperty('display', 'block');
	toast.innerText = mensagem;

	let imagem = 'media/fogo.png';;

    if (!desativarEfeitosSonoros) {
        executaEfeitoSonoro('fogo-0');
    }

    if (valor > 10) {
        valor = 10;
    }

	for (let i = 0; i < valor; i++) {
		let img = document.createElement('img');
		img.setAttribute('src', imagem);
		toast.append(img);
	}

	setTimeout(() => {
		toast.style.setProperty('display', 'none');
	}, 5000);
}

iconeFecharModalInicial.addEventListener('click', () => {
    modalInicial.style.setProperty('display', 'none');
    temporizador();
});

btnVoltar.addEventListener('click', () => {
    modalInicial.style.setProperty('display', 'none');
    temporizador();
});

opcaoMenu.addEventListener('click', () => {
    modalInicial.style.setProperty('display', 'flex');
    atualizaExibicaoPerfilJogador();
    // salvaPerfilJogador();
    clearInterval(intervaloTemporizador);
});

checkboxDesativarEfeitosSonoros.addEventListener('click', () => {
    if (desativarEfeitosSonoros) {
        desativarEfeitosSonoros = false;
    } else {
        desativarEfeitosSonoros = true;
    }
})

const abrirComoJogar = document.querySelector('#abrirComoJogar');
const abrirConfiguracoes = document.querySelector('#abrirConfiguracoes');
const abrirQuintetoDia = document.querySelector('#abrirQuintetoDia');
const abrirLoja = document.querySelector('#abrirLoja');
const abrirEditarPerfil = document.querySelector('#abrirEditarPerfil');
const abrirConquista = document.querySelector('#abrirConquista');
const abrirCriador = document.querySelector('#abrirCriador');

const divsAbertura = [... document.querySelectorAll('.divsAbertura')];
const abridores = [... document.querySelectorAll('.abridores')];

const divComoJogar = document.querySelector('#divComoJogar');
const divConfiguracoes = document.querySelector('#divConfiguracoes');
const divLoja = document.querySelector('#divLoja');
const divEditarPerfil = document.querySelector('#divEditarPerfil');
const divConquistas = document.querySelector('#divConquistas');

function fechaDivsAbertura(excecao) {
    divsAbertura.forEach(div => {
        if (div != excecao) {
            div.classList.add('esconde');
        }
    });
}

function executaEfeitoSonoro(nome, extensao = 'wav', loop = false) {
    const efeitoSonoro = new Audio(`media/efeitos-sonoros/${nome}.${extensao}`);
    efeitoSonoro.loop = loop;
    efeitoSonoro.play();
}

abridores.forEach(abridor => {
    abridor.addEventListener('click', () => {
        executaEfeitoSonoro('1');
    })
});

abrirComoJogar.addEventListener('click', () => {
    fechaDivsAbertura(divComoJogar);
    divComoJogar.classList.toggle('esconde');
});

abrirConfiguracoes.addEventListener('click', () => {
    fechaDivsAbertura(divConfiguracoes);
    divConfiguracoes.classList.toggle('esconde');
});

abrirLoja.addEventListener('click', () => {
    fechaDivsAbertura(divLoja);
    divLoja.classList.toggle('esconde');
});

abrirEditarPerfil.addEventListener('click', () => {
    fechaDivsAbertura(divEditarPerfil);
    divEditarPerfil.classList.toggle('esconde');
});

abrirConquistas.addEventListener('click', () => {
    fechaDivsAbertura(divConquistas);
    divConquistas.classList.toggle('esconde');
});