import React from "react";
import './_AboutUs.scss'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
return (
	<div className="home container">
		<section className="about-section">
			<h3>Vad är S.Mak?</h3>
			<p>Idén till S.Mak föddes när grundaren Sofia Mäkiniemi i januari 2022 precis avslutat sina studier vid Stockholms Universitet. Med två kandidatexamen och en curatorutbildning på avancerad nivå under bältet kände Sofia att hon ville starta något eget, resultatet blev S.Mak Curating.</p>
				<p>S.Mak är alltså en curator-tjänst för privatpersoner, företag och produktioner som hjälper till med allt från att hitta konst och konstnärer till att rama in och hänga upp. Behöver företagets kontorslandskap en klick färg? S.Mak hittar konst och prints som passar just er och hjälper er att liva upp arbetsplatsen. Har du precis köpt en ny bostad och vet inte alls hur du ska arrangera din konstsamling? S.Mak kommer med förslag på hur du kan visa upp dessa på bästa sätt. </p>
				<p>S.Mak curating fungerar som en brygga mellan köpare och konstnärer och konsthandlare. Allt från att hitta specifika konstnärer, kontakta dessa, be om offerter eller kommissioner, inköp och frakt. Sedan finns det självklart möjlighet att få hjälp att rama in, placera och hänga konsten.</p>
				<p>Utöver curating kan S.Mak fungera som konsultation vid filmproduktioner m.m. som vill använda sig av specifik konst som ska passa in i teman, epoker eller platser. Med erfarenhet av undersökningar i arkiv och databaser kan S.Mak förse produktionen med relevant och legitim fakta.</p>
				<p>S.Mak används även som webbutik för Sofia Mäkiniemis egen konst.</p>
				<p>Vill du läsa mer om vilka tjänster S.Mak erbjuder eller vilka priser vi har? Klicka <Link className='' to="/services">HÄR</Link></p>
		</section>
		<section className="about-section">
			<h3>Vem är S.Mak?</h3>
				<p>S.Mak Curating grundades och består av Sofia Mäkiniemi.</p>
				<p>Sofia föddes 1997 och är uppväxt i Norrtälje kommun. Under uppväxten fanns det alltid intresse för kultur, historia och i synnerhet musik. Musiken fanns med länge och skolgången kantades av musikstudier på olika nivå. Just intresset för konst var något som kom och gick länge och hamnade i skym undan av just musiken.</p>
				<p>Hösten 2017, ett år efter studenten från Fryshusets Gymnasium, valde Sofia att fokusera tillfälligt på ett annat intresse, nämligen museer och kulturarv. Det var här som den akademiska karriären tog sitt startskott, och intresset för konst började växa. Studierna inleddes på Stockholms Universitet med 30HP Museer och Kulturarv, en introduktionskurs till ett kandidatprogram med samma namn. Efter detta tog musiken åter igen plats på scen för ett års studier av musikvetenskap. Tanken var sedan att läsa ett år arkeologi för att sedan ta ut en dubbel kandidat i museer och kulturarv samt musikvetenskap, men det var här som konsten gjorde come back, och den här gången var den kvar för att stanna. </p>
				<p>Sofia läste hösten 2019 och våren 2020 konstvetenskap vid Uppsala Universitet, och detta öppnade upp en helt ny värld. Intresset för konsten ökade markant och detta blev en stor del av Sofias liv. Studierna ledde till den planerade dubbelkandidaten och i augusti 2021 kunde Sofia stolt visa upp båda sina examensbevis från Stockholms Universitet. Nu stod det klart: konsten hade tagit över musikens plats på intressetoppen.</p>
				<p>Intressebytet ledde till ansökan till Curatorutbildning 30HP vid Stockholms Universitet, en utbildning som hade höga krav på sina studenter. Men under sensommaren 2021 bevisades det att jobbet var värt mödan och platsen på utbildningen var garanterad. Utbildningen innebar hårt jobb, många timmars studier, föreläsningar och seminarier, men den öppnade upp ett nytt synsätt på konsten, konstmuseet och dynamiken i hängningen och placeringen av konsten i rummet. Curatorutbildning var det som satte startskottet för det som skulle bli S.Mak Curating.</p>
				<p>Under covid19-pandemin vågade sig Sofia sig även på att testa sina egna vingar inom konst och skapande. Det inleddes med skisser och blyertsteckningar. Sedan blandades tusch in, och akvarellpennor. Försök gjordes med akryl och digitalt skapande. Även visst skulpterande har pågått i den lilla hemmaateljén. Sofia är självlärd i det mesta av sitt skapande och har lärt sig genom trial and error, och när just nu drömmar om att en dag studera fri konst vid Konstfack.</p>
		</section>
		<section className="about-section">
			<h3>Utbildning</h3>
			<p>STOCKHOLMS UNI., CURATORUTBILDNING 30HP, AUG 2021 - JAN 2022</p>
			<p>STOCKHOLMS UNI., KONVETENSKAPLIG KANDIDATKURS MED INRIKTNING MUSEER OCH KULTURARV 30HP, JAN 2021 - AUG 2021</p>
			<p>UPPSALA UNI., KONSTVETENSKAP A & B 30HP, SEP 2019 - MAJ 2020</p>
			<p>STOCKHOLMS UNI., MUSIKVETENSKAP 1, 2 & 3 60HP AUG 2018 -JAN 2021 </p>
			<p>STOCKHOLMS UNI., INTRODUKTIONSKURS MUSEER OCH KULTURARV 30HP AUG 2017 - JAN 2018 </p>

			<h4>PRAKTIK </h4>
			<p>Under hösten 2021 praktiserade Sofia under fem veckor på WAY Gallery på Odenplan som del av Curatorutbildningen vid Stockholms Universitet. </p>

			<h4>FOLKHÖGSKOLA</h4> 
			<p>Under våren 2022 läste Sofia kursen Ateljé Digital vid Södra Stockholms Folkhögskola.</p>
		</section>
	</div>
);
};


