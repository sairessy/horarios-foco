const Horario = (turma) => {
  const { curso, local, sala, periodo, aulas } = turma;
  return `
        <div class="horario">
            <div class="horario-header">
                <h4>Curso: ${curso}</h4>
                <h4>Local: ${local}</h4>
                <h4>Sala: ${sala}</h4>
                <hr/>
            </div>
            <table border>
                <thead>
                    <!--<tr>
                        <th><td colspan="5">AULAS PRESENCIAIS</td></th>
                    </tr>-->
                    <tr>
                        <th>HORAS</th>
                        <th>2ª feira</th>
                        <th>3ª feira</th>
                        <th>4ª feira</th>
                        <th>5ª feira</th>
                        <th>6ª feira</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${
                          periodo === "Manhã"
                            ? "07:00 - 07:45"
                            : periodo === "Tarde"
                            ? "12:20 - 13:05"
                            : "17:20 - 18:00"
                        }</td>
                        <td>${aulas.r1[0]}</td>
                        <td>${aulas.r1[1]}</td>
                        <td>${aulas.r1[2]}</td>
                        <td>${aulas.r1[3]}</td>
                        <td>${aulas.r1[4]}</td>
                    </tr>
                    <tr>
                        <td>07:00 - 07:45</td>
                        <td>${aulas.r2[0]}</td>
                        <td>${aulas.r2[1]}</td>
                        <td>${aulas.r2[2]}</td>
                        <td>${aulas.r2[3]}</td>
                        <td>${aulas.r2[4]}</td>
                    </tr>
                    <tr>
                        <td>07:00 - 07:45</td>
                        <td>${aulas.r3[0]}</td>
                        <td>${aulas.r3[1]}</td>
                        <td>${aulas.r3[2]}</td>
                        <td>${aulas.r3[3]}</td>
                        <td>${aulas.r3[4]}</td>
                    </tr>
                    <tr>
                        <td style="background: #aaa">07:00 - 07:45</td>
                        <td style="background: #aaa">Intervalo</td>
                        <td style="background: #aaa">Intervalo</td>
                        <td style="background: #aaa">Intervalo</td>
                        <td style="background: #aaa">Intervalo</td>
                        <td style="background: #aaa">Intervalo</td>
                    </tr>
                    <tr>
                        <td>07:00 - 07:45</td>
                        <td>${aulas.r4[0]}</td>
                        <td>${aulas.r4[1]}</td>
                        <td>${aulas.r4[2]}</td>
                        <td>${aulas.r4[3]}</td>
                        <td>${aulas.r4[4]}</td>
                    </tr>
                    <tr>
                        <td>07:00 - 07:45</td>
                        <td>${aulas.r5[0]}</td>
                        <td>${aulas.r5[1]}</td>
                        <td>${aulas.r5[2]}</td>
                        <td>${aulas.r5[3]}</td>
                        <td>${aulas.r5[4]}</td>
                    </tr>
                    <tr>
                        <td>07:00 - 07:45</td>
                        <td>${aulas.r6[0]}</td>
                        <td>${aulas.r6[1]}</td>
                        <td>${aulas.r6[2]}</td>
                        <td>${aulas.r6[3]}</td>
                        <td>${aulas.r6[4]}</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
};
