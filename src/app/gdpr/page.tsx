import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů – GDPR | brevnovevents.cz",
  description:
    "Zásady ochrany osobních údajů společnosti IN CATERING s.r.o. pro návštěvníky brevnovevents.cz.",
  alternates: {
    canonical: "https://brevnovevents.cz/gdpr",
  },
};

export default function GDPRPage() {
  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Zásady o ochraně osobních údajů
        </h1>
        <p className="mt-4 text-center text-sm text-brand-white/50">
          Společnost IN CATERING s.r.o. · Poslední aktualizace: 31. 7. 2024
        </p>

        <div className="prose-gdpr mt-16 space-y-10 text-sm leading-relaxed text-brand-white/70">
          {/* Kontakty správce */}
          <div>
            <p>
              Správcem osobních údajů je společnost{" "}
              <strong className="text-brand-white">IN CATERING s.r.o.</strong>
            </p>
            <p className="mt-2">
              Veškeré dotazy týkající se zpracování osobních údajů můžete
              zasílat na následující kontakty:
            </p>
            <address className="mt-2 not-italic">
              <p>Libocká 10/64, 162 00 Praha 6</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:info@incatering.cz"
                  className="text-brand-white underline hover:text-brand-red"
                >
                  info@incatering.cz
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+420220560494"
                  className="text-brand-white underline hover:text-brand-red"
                >
                  +420 220 560 494
                </a>
              </p>
            </address>
          </div>

          {/* 1. Úvod */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">1. Úvod</h2>
            <p className="mt-3">
              Toto Prohlášení o ochraně údajů se vztahuje na zpracování
              veškerých osobních údajů spotřebitelů, zákazníků, dodavatelů a
              obchodních partnerů (&bdquo;obchodní partneři&ldquo;) společností
              IN CATERING s.r.o., se sídlem Libocká 10/64, 162 00 Praha 6, IČO:
              630 725 72, zapsané u Městského soudu v Praze, oddíl C, vložka
              35898 (dále označována jako &bdquo;Naše společnost&ldquo; nebo
              &bdquo;my&ldquo;).
            </p>
            <p className="mt-3">
              Toto Prohlášení o ochraně údajů se nevztahuje na údaje související
              s obchodní činností, ani na údaje o společnostech.
            </p>
            <p className="mt-3">
              Naše společnost je správcem osobních údajů obchodního partnera. V
              tomto prohlášení je uvedeno, kdo jsme a pro jaké účely
              zpracováváme Vaše osobní údaje a jiné informace o Vás. V případě,
              že budete mít dotazy, můžete využít kontaktů na konci tohoto
              prohlášení.
            </p>
            <p className="mt-3">
              Toto prohlášení o ochraně údajů je zpracováno v rozsahu
              požadovaném právními předpisy, podle zákona č. 101/2000 Sb., o
              ochraně osobních údajů, ve znění pozdějších předpisů a Nařízením
              Evropského parlamentu a Rady (EU) 2016/679 (GDPR), které je účinné
              od 25. 5. 2018. Toto prohlášení se může průběžně měnit v čase a
              jeho aktuální verze je vždy zveřejněna na našich webových
              stránkách. Budou-li provedeny významné změny, budeme Vás
              informovat.
            </p>
          </div>

          {/* 2. Účely zpracování */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              2. Pro jaké účely zpracováváme Vaše osobní údaje?
            </h2>
            <p className="mt-3">
              Naše společnost bude zpracovávat Vaše osobní údaje při provádění
              obchodních transakcí mezi Vámi a Naší společností, navštívíte-li
              naše webové stránky, sociální sítě nebo aplikace nebo v rámci
              jiného kontaktu s námi.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              A. Odpovědi na Vaše dotazy
            </h3>
            <p className="mt-2">
              Budete-li nás kontaktovat, budeme Vaše osobní údaje používat za
              účelem reakce a odpovědi na Vaše dotazy, poptávky a v dalších
              případech našeho kontaktu. Za tímto účelem zpracováváme Vaše
              osobní údaje na základě Vašeho souhlasu. Zpracováváme Vaše jméno,
              kontaktní údaje, Vaši korespondenci s námi, Vaše dotazy a veškeré
              ostatní osobní údaje nezbytné pro zodpovězení Vašich dotazů.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              B. Rozvoj a zlepšování produktů anebo služeb
            </h3>
            <p className="mt-2">
              Vaše osobní údaje zpracováváme za účelem vyhodnocení, analýzy a
              zlepšování našich produktů a služeb. Používáme Vaše osobní údaje
              pro analýzu chování zákazníků a provádění odpovídajících úprav
              našich produktů a služeb. To zahrnuje analýzu, jak často čtete naše
              newslettery, jak často navštěvujete naše webové stránky, na které
              stránky klikáte a jaké produkty a služby nakupujete.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              C. Vyhodnocení a přijetí zákazníka, dodavatele nebo obchodního
              partnera
            </h3>
            <p className="mt-2">
              Budete-li nás kontaktovat, budeme zpracovávat Vaše osobní údaje
              pro účely potvrzení a ověření Vaší identity a dále pro účely
              vyhodnocení a ověření možnosti další spolupráce. Zpracováváme
              osobní údaje, protože je to nezbytné pro uzavření smlouvy mezi Vámi
              a Naší společností.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              D. Uzavření a plnění smlouvy
            </h3>
            <p className="mt-2">
              Jestliže jste si od nás koupili produkt nebo službu jako zákazníci
              nebo spolupracujete-li s námi jako dodavatelé nebo obchodní
              partneři, zpracováváme Vaše osobní údaje pro administrativní účely,
              jako je odesílání faktur a provádění plateb. Vaše osobní údaje
              používáme také za účelem dodávání, přijímání a správy našich nebo
              Vašich produktů a služeb.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              E. Řízení vztahů a marketing
            </h3>
            <p className="mt-2">
              Používáme informace uložené v databázi našich zákazníků, abychom
              Vám mohli odesílat vhodné nabídky a newslettery, jakož i za účelem
              poskytování zákaznických služeb a zasílání novinek, aktualit a
              nabídek. Při zasílání newsletterů a marketingové komunikace
              zpracováváme Vaše osobní údaje na základě Vašeho souhlasu.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              F. Obchodní aktivity a interní řízení
            </h3>
            <p className="mt-2">
              Vaše osobní údaje zpracováváme při provádění a organizaci naší
              podnikatelské činnosti. To zahrnuje obecné řízení, správu
              objednávek a správu našeho majetku. Provádíme audity, šetření,
              obchodní kontroly a spravujeme adresáře zákazníků, dodavatelů a
              obchodních partnerů. Dále zpracováváme údaje pro účely finanční
              správy a účetnictví, archivace a pojištění, právní a obchodní
              konzultace a pro řešení sporů.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              G. Organizační analýzy a rozvoj
            </h3>
            <p className="mt-2">
              Zpracováváme Vaše osobní údaje, abychom byli schopni připravovat a
              předkládat zprávy a analýzy. Používáme agregované/anonymizované
              osobní údaje pro vypracování zpráv pro vedení Naší společnosti a
              pro analýzu naší obchodní činnosti.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              H. Používání našich webových stránek nebo aplikací
            </h3>
            <p className="mt-2">
              Používáte-li naše webové stránky, zpracováváme technické údaje,
              abyste mohli využívat funkce našich webových stránek a abychom
              umožnili jejich správu a zlepšování. Zpracováváme technické údaje z
              Vašeho přístroje, jako je jeho IP adresa, internetový vyhledávač,
              stránky, které jste navštívili na našem webu, a délku Vaší návštěvy
              – v souladu s Pravidly Cookies.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              I. Kontakt prostřednictvím sociálních médií
            </h3>
            <p className="mt-2">
              Naše společnost je aktivní na platformách sociálních médií, jako
              jsou LinkedIn, Instagram, Facebook, YouTube a TikTok.
              Kontaktujete-li Naši společnost prostřednictvím sociálních médií,
              zpracováváme Vaše osobní údaje za účelem odpovědí na Vaše dotazy a
              reakcí na Vaše vzkazy.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              J. Monitorování a kontrola
            </h3>
            <p className="mt-2">
              Monitorujeme naše procesy, abychom ověřovali dodržování našich
              směrnic, předpisů a etického kodexu. V průběhu monitorovací
              činnosti můžeme získat přístup k Vašim osobním údajům.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              K. Ochrana zdraví, bezpečnost a zajištění integrity
            </h3>
            <p className="mt-2">
              Vaše osobní údaje zpracováváme za účelem zabezpečení ochrany
              našich zaměstnanců, zákazníků, dodavatelů a obchodních partnerů.
              Ověřujeme Vaše oprávnění k přístupu do našich prostor a můžeme
              provádět ověření Vašich osobních údajů se záznamy dostupnými ve
              veřejných registrech.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              L. Dodržování předpisů
            </h3>
            <p className="mt-2">
              V některých případech zpracováváme Vaše osobní údaje za účelem
              dodržování zákonů a dalších právních předpisů, např. za účelem
              plnění daňových povinností. V případech stanovených platnými zákony
              můžeme být povinni zpřístupnit Vaše osobní údaje správním nebo
              dozorovým orgánům.
            </p>

            <h3 className="mt-6 font-bold text-brand-white">
              M. Účast na propagačních a jiných akcích
            </h3>
            <p className="mt-2">
              Posíláme Vám informace o propagačních akcích a pozvánky k účasti
              na různých aktivitách. Jestliže se rozhodnete pro účast, potřebujeme
              Vaše osobní údaje pro organizaci těchto aktivit. Vaše osobní údaje
              zpracováváme na základě Vašeho souhlasu, který můžete kdykoliv
              odvolat.
            </p>
          </div>

          {/* 3. Uchovávání */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              3. Jak dlouho uchováváme osobní údaje?
            </h2>
            <p className="mt-3">
              Naše společnost bude obecně uchovávat údaje obchodního partnera
              pouze po dobu požadovanou pro příslušný obchodní účel, v rozsahu
              přiměřeně nezbytném pro splnění požadavků platných právních
              předpisů. Neprodleně po uplynutí příslušné lhůty pro uchovávání
              údajů budou údaje:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Bezpečně vymazány nebo zničeny</li>
              <li>Anonymizovány</li>
              <li>
                Předány do archivu (nebude-li to zakazovat zákon nebo platný plán
                skartace)
              </li>
            </ul>
          </div>

          {/* 4. Sdílení */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              4. Sdílení osobních údajů
            </h2>

            <h3 className="mt-4 font-bold text-brand-white">
              A) Přístup v rámci Naší společnosti
            </h3>
            <p className="mt-2">
              Vaše osobní údaje mohou být předávány mezi majiteli Naší
              společnosti pro administrativní účely a kompletní přehled o Vašich
              smlouvách. Zaměstnanci Naší společnosti jsou oprávněni přistupovat
              k osobním údajům výhradně v rozsahu nezbytném pro stanovené účely a
              plnění jejich pracovních povinností.
            </p>

            <h3 className="mt-4 font-bold text-brand-white">
              B) Přístup třetích stran
            </h3>
            <p className="mt-2">
              Pokud je to potřebné pro poskytování produktů a služeb Naší
              společnosti, mohou mít k Vašim osobním údajům přístup také
              následující třetí strany: banky, pojišťovny, auditorská firma, IT
              dodavatelé, účetní, konzultanti a další subjekty. Naše společnost
              přijme smluvní, technická a organizační opatření, aby zajistila, že
              Vaše osobní údaje budou zpracovávány pouze v nezbytném rozsahu.
              Jsou-li osobní údaje předávány třetí straně v zemi, která
              nezajišťuje odpovídající úroveň ochrany, přijmeme opatření pro
              zajištění odpovídající ochrany Vašich osobních údajů, např.
              sjednáním standardních smluvních podmínek EU.
            </p>
          </div>

          {/* 5. Zabezpečení */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              5. Jak jsou Vaše osobní údaje zabezpečeny
            </h2>
            <p className="mt-3">
              Zavedli jsme odpovídající bezpečnostní opatření k zajištění
              zachování důvěrnosti a bezpečnosti Vašich osobních údajů. Zavedli
              jsme odpovídající technická, fyzická a organizační opatření na
              ochranu osobních údajů před náhodným a protiprávním zničením nebo
              náhodnou ztrátou, škodou, úpravou, neoprávněným zveřejněním nebo
              přístupem, jakož i před všemi ostatními formami protiprávního
              zpracování.
            </p>
          </div>

          {/* 6. Práva */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              6. Jak můžete uplatnit svoje práva na ochranu soukromí?
            </h2>
            <p className="mt-3">
              Máte právo požadovat přístup k Vašim osobním údajům nebo přehled o
              nich a za určitých podmínek také právo na opravu anebo vymazání
              osobních údajů. Navíc máte právo požadovat omezení zpracování
              týkající se Vašich osobních údajů, právo vznést námitku proti
              zpracování, jakož i právo k přenositelnosti údajů. Pro uplatnění
              svých práv nás prosím kontaktujte s použitím kontaktních údajů
              uvedených v tomto prohlášení.
            </p>
          </div>

          {/* 7. Odvolání souhlasu */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              7. Můžete odvolat svůj souhlas?
            </h2>
            <p className="mt-3">
              Udělený souhlas můžete vždy odvolat. Vezměte prosím na vědomí, že
              toto odvolání nebude mít retrospektivní dopad. Pro odvolání Vašeho
              souhlasu nás prosím kontaktujte s použitím kontaktních údajů
              uvedených v tomto prohlášení.
            </p>
          </div>

          {/* 8. Stížnost */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              8. Jak vznést stížnost?
            </h2>
            <p className="mt-3">
              Máte-li stížnost ohledně používání Vašich osobních údajů Naší
              společností, můžete tuto stížnost vznést prostřednictvím kontaktní
              osoby uvedené v tomto prohlášení. Vedle uplatnění stížnosti u Naší
              společnosti se můžete se svojí stížností obrátit také na dozorový
              orgán – Úřad pro ochranu osobních údajů, Pplk. Sochora 727/27,
              170 00 Praha 7-Holešovice,{" "}
              <a
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-white underline hover:text-brand-red"
              >
                www.uoou.cz
              </a>
              .
            </p>
          </div>

          {/* 9. Kontakt */}
          <div>
            <h2 className="text-lg font-bold text-brand-white">
              9. Jak nás můžete kontaktovat?
            </h2>
            <p className="mt-3">
              Máte-li dotazy ohledně způsobu, jak zpracováváme osobní údaje,
              přečtěte si prosím nejdříve toto prohlášení. V případě doplňujících
              dotazů nás prosím kontaktujte na:
            </p>
            <p className="mt-2">
              E-mail:{" "}
              <a
                href="mailto:info@incatering.cz"
                className="text-brand-white underline hover:text-brand-red"
              >
                info@incatering.cz
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a
                href="tel:+420220560494"
                className="text-brand-white underline hover:text-brand-red"
              >
                +420 220 560 494
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
