import React from 'react';
import header from './Header.module.css'; 

const Header = () => {
    return (
        <header className={header.header}>
            <img className={header.logo} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPDw8PDxAPDw8PEBAPDw8PDw8PEA8NFREXFhYRFRYYHSggGBolGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dFR0tLi0tKy0tLS0tLS0tLSstLSstLS4tLS0tLS0tLS03LS0tKy0tLS0tLS0rKy0tKy0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAEsQAAEDAQMHBgsECAMJAAAAAAEAAgMRBBIhBQYTMUFRcSI0YYGRsgcUM0JScnOhscHRIzJiwiRDU3STorPwY4KSFRZUg4S04ePx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEAAwACAgIDAQAAAAAAAAAAAQIREjEDIRMzMkFxUf/aAAwDAQACEQMRAD8A84QgIXR4QEwkmEQ00k0DTCSaIEwkmEDTSTCIApAKIUqohoQEIBSCSYRDCaQTQMIQhABSUQpIBCEKgQhCIaEIUFYhCEdgE0gpBECaSYQNNJNECYSTCBoCEwjICaSaKkEICEQwmEkIiSaSaBoQhAKSipIBCEKgQEIRDQiqFBWIQmjsE0JogQgIQMJoCEQKSzWKxSTuuRML3baamje47AutydmvFE3SWlweRiRW7E3jX73XQdCmrFZlydksUkxpFG6Q7bowHE6h1q8suaEzsZHsj6BWR3uoPeurjlNA2GMNYMA540TAPwtpePYB0p+Kud5SV7t7Y/sW9V3lfzFNaikKZmaMDRWSWU9NWMb8D8VIZHyeMC9hPTacfcVcssEQNdGwu9JzQ53+o4rZApqw4KNcXOuyTk8+fGP+p+rkjmpZ34xySf5XsePh810hWvJYonGrooyd5Y2o69aHFytpzQkHk5GP6HAsPzHwVLbMnyw+VjczpIq08HDBeheJ3fJySs6C7SN4UfWg4UQXyNBEjGytIoXRDWOmN2zgSehVmaQ81TXZ2zN6C0AvgIifWhDRyL25zNbT2cFy1vydJZ3XZW0rqcMWO4H+yrrlNZhrBCQTRAmkmEDQhCAQhCAQhCIrkUQmEdQmhCATARRNECtshZEfanVxZC00dJtJ9Fu8+4e5Gb+Rzan41bEw/aOGsn0G9Pw7F3GqkEADAwAOcAKRN2NGwvIxx1VqdgMbrVGzxsgGgs7ASMSK0DfxSO39Gs8NWeOy4h7zpHjUSKNYfwN83jr6VkghDBdaKDXrJJJ1kk4k9JWRR0wIQhA00gmgEIQgEIQiMU9ma83sWPGAkZg4DduI6DULXmIcNFaWtc1xDQ+n2bzsB9B27Hga4LeCT2BwIcAQQQQRUEHYQqjhsvZCdZ+Wyr4SdfnR9Dujp/s0y9H8lyX8uF3JDncosrhcfXW06gTwO9clnHkXxd2kjB0LjTfo3eiejcericrV/cKVCEKsJISCaAQhCAQhCCvTQhHQJhFE0QLYsFkdPKyJn3nmldjRrLj0ALXXa5n2ARQutMlAXgkE+bA3EnrpXgAixGraKEQRx2eEUcQaE0NB50rt5+JIGrVuQQhjQ1uoV14kkmpJO0k41WKxsOMjxR8lCQdbGD7rOoHHpJWysu0BCEIBNBQgAmkmgEIQgEIQiAJpJhAnNBBBAIIIIIqCDrBWmIxQ2aXlxvadGXVN5m1hPpN2HWRjrBK3VitUN9tAbrgbzHei8aj9RtBI2oPPcrWA2eV0ZxH3mO9Jh1H5dS0122X7L4zZtIG0livG7rIINJI+nV10G9cStOFoyQFJRQjKSEgUVQNCEINFOiEI2EITQZ7BZTNLHENcjg2u4bT1CpXo88Y+ygaKNwcQNQijpRvW64OkXlymY9mvTvkP6tlB6zzSvYHdq66zcp8r/wAQib6rBj/O546go6Vj0qbfnXDDK+J0cpcw0JaGUJpXCrulWOR8pttUZkY1zWh5ZR9K1AB2E7157nQf0y0ev+ULrcwuaO9s/utVmPTNbzN5j9OjQhCy6tPKeU4rMy/K6lcGtGLnncAualz6x5FnqN75aHsDfmucy7lE2md8hPJBLYxsbGDh26+JVlkLNR9pjEr5NEx1bgu33OAwrSooFvIjt558lrTlVxYs943ECaJ0QPntdpGjiKA9lV1Ubw5oc0hzXAFrgagg7QV5hnBkR1je0FwkY8EseBd1awRsOI7VeZgZQdefZnElt0yx1801Ac3gag9u9SY9bDVLzvGzspZGsaXPIa1oJc5xoAN5K5a257xtNIYnSgec52jB4ChPbRamf+UDfZZgSGhokfTznEm6D0ClevoVHkDIr7Y9zWuDGsAL3kVpXUANpOPYkRGF7zvGroIc+8eXZ6DaWS1PYWj4rp8mZSjtLL8TqjU5pwc07nDYuGy9ms6yx6VsgljBAfybjmVNAdZqK4dYWhm7lF1mtEbweS4hkg2OjJoezX1K5H6Zi9qzlnqioMsZ2Q2dxjaDNI3BwaQGNO4u38AVlzvygbPZnFhIfI4RNcMC2oJLh00B7QvOLJZnSyMijFXvIa0dP0UiGvJeY9R26wZ+OrzZtPbGvdV/kXOOG18ltWSUro30qRvadR+K585iOuVFoaZKfd0ZDCd16teunUuT5cT9ZZJG7WDi17T9QrkT0zzvX8nrQFyYjzZhX/msAB7W0/hlcFlqx6C0SRj7tbzPUdiB1aupdhZrdp7HFadTmgSuoNRYSJAOIDx1qrz4s+MMo21jJ/mb+ZZbt7hyyEk1XIIQhA6oSQg1aJpoRskJoQdrmNFSCR586Uj/ACtaPmSrrJvkYzteNIfWeb597lVZtG7k+90Tu6wXfRXcDaNaNzWjsCy7VeY5z88tHr/lC67MLmjvbP7rFyWdHPbR6/5QutzC5o72z+6xbnpwp9kujQ7UeCaTtR4LD0PGhqHBes5DFLLZqfsIf6YXkw1BetZE5rZv3eH+mFuzz+HuXP8AhDH2UB/xHd1U2YvPB7OT5K58IZ+yg9o7uqmzG54PZyfJSOlt9kI58c9f6kfdV54PG/YznbpWjquD6qiz356/1I+6r7we+Rn9qO4En8Ur9krzLza2S0g/sJT1hhI+C8obrC9htMAkjfG6t2RjmOpgbrhQ0VF/uZZf8b+IPolZxryUm0xjW8IXkIPanuFUWZArbY+hkhHG4Ve+ELyMPtT3CqLMfnrPUk7qsdM2+yHpC8ny6P0q0+3l75XrC8ny9zu0+3l7xUqvm6h3eZja2CMHUTKDwMjlDLrC/JzScXRiIn1gQx3xKyZlcxi4yf1HLJb21sNpG42j3TOI+CjcfjH8cIhJCriaEk0DQkhBgTTQjZITQg7jNzlZPu/hnHaXfVXkLqtad7QfcqLMmStnew+bKf8AS5oPxqrfJp+xjB1taGH1mck+8FZday82zn57aPX/AChddmDzV3tn9xi5LOjnlo9f8oXW5gc1d7d/cYtz04eP7JdKk7UeBTSdqPA/BYel4yNXUvWsic1s37vD/TC8lGocF61kTmtm/d4f6YW7PP4e5c/4QvJwe0d3VTZij9MHs5PgFc+EPyUHtHd1U2YvPB7OT4BSOlt9kI5789f6kfdV74PfIz+1b3AqLPjnr/Uj7qvfB55Gf2o7gSekr9kr1+V7OCQbRACDQgysqCNmtL/bVm/4mD+Kz6rzbKdkk0sztHJd0khvXHUpeONaalo0V4k+af8AHd+ELyEPtT3CqLMbnrPUk7qvPCD5CH2p7hVJmNz1nqSd1I6LfZD0deT5e51afby98r1gryfL3O7T7aTvlSq+bqHeZlcxi4yf1HLLbz+g2k7zaffM8LFmWaWGInUDKTw0jljy5JdycK4OkEVR+Jzg9w+KjcfjH8cVVNRQq4pIUU0DQlVCCKEIRQhCEHSZkWikskf7RgcPWYfo49i6mycl8zNz9I0fgkxJ/wBYkXneTbVoZo5djHAu6WHBw7CV6HaHXXRSg1afsnkarjyLjup1BweVJdaT6ecZ0c8tHtD8AuozFtDG2V4c9jTpnYOe1ppcZvXL5zNPjlowPlDsO4KsuHcewrebDhFuNpl6945H+1i/iM+qmyZrsGvY4081zThvwXj2jPonsK6XMBlLU/Aj7B2z8bFmautfLs5jmnsLSWnAtJaR0jAr0/Na2NlskN0gujY2J7drXNFMR00r1rns7s3H33WiBpe1/KlY0Vc1+1wG0Hb0+7kWuLTgSDqwNDwV7hziZ8dvbrvCDbGudDC0guZee8A/dJoGg9Ov3LSzDYTbK7GxPJ6y0fNUVms75XBkbXPedjRU8Tu4r0bNfInikZvUM0lC8jENA1MHBJ9QtdvfXKZ9MIthJ86OMjhiPkrHwfW1oM0DiA55a9gPnUFHAdOr3q5zpyH43GCygmjrcrgHNOthPw/8rzi0QOjcWSNcxw1tcCDxSPcFtpfXpudNqbFZJrxAMjHRsFcXOcKYDrJ6l5lAwuc1o1uc1o4k0Ci5xccSXHUKkk8F2GaGbrg9tpnaWhuMUbhRxd6bhsA2dPvdJMz5JbnhBYfF4jsbNQ9bHfRcvmvbGwWuJ7zRnKY4nUA5pFT0VovSMpWJtoifC/7rxSo1tdrDh0g0XmGVsky2V5bK03a8mQA3HjoPy1pWfTXliYtyh6tLK1jS9zg1jReLieSG76ryLKM4lmlkGqSR7xwLiQsN80pU0GoVwB4K2yDkCS1uBoWQ15UpFKjczefcEiMZtab5EQ63N9hGTYmYgzFzBvuySuF7qaS7qWvnzPhDEN7pCNwAut+LuxXsMQ0jWMAEdmYA0DUJHNo0dTK/xAuGzgtmmtMjhi1p0bPVbhXrNT1rLrb1XFehJCrkaEkIGhJCB0SU0KaqCE6IVAu2zWtgns7rO/ExtuEbTCcAerV1BcTRbWTLa6zytlbjdwc30mHW3+9oCktVnJeiWOUkFjzWSM3Xn0vRf1jHjUbFnWmXiRrLTBy+TqGGkiOtnrA6txqMKlbUUge0OaatIqD/AHqPQo7QmhCKIoWGWyxvNXxxuO9zGuPvCzURRBCKJrBRrWtG5oDR7lNFEUQChLE14o9rXDc5ocPep0RREYYrLGw1ZHG072sa0+4LMhCAScARQgEHWDiE0INcWKIGoiiB36Nlfgp2iYRsLqVpQNaNbnHBrRxNAsq0o3h507yBFGCYq4ClOVMeqoHQSduBGjlm1my2Ui8DNLUVG2R2L3jcANW7khcGrHLmUjaZi/EMHJjadjN56Tr/APirlpxtOhCEIyEIQgEIQgyoosgYi4srjHRKizaNO4i4wXUUWxolIQJq4sM3MsGzuuProXnHbo3ekOjeF172Fh0sQvsfypI241r+tZvNNY27MdfBizK9yDlF0H2b6uhrxdH0jeOj+zNbrvTqYnh4DmkOadRGoqVFAWW99tZ3Nq/FzSTopeNMWu2Xh1g0FM9mla43CDHIBUxPoHU3t2ObqxFR1prrksdE6LdECkLOpq8ZaF1FFYeLo8XTV4q+6i6rDxdHi6cjir6JUVgbOomBNTi0aJLPaXNjpeOLsGMAvPedzWjE/LatV9kMgLp6RxDHQ1BFN8rtR9UYdLtl1mYahHjH7v8A9x/6+96v3uazoy1pSYIj9k08tw/WOGwfhHvW/nBlUygxQ1bGcHP1F43Dc34rmjZldcrTLTolRbRgKgYldcmvRFFmMaCxNGGiFkuJXVRjQp3UILARqQiW0I1MRrjNnbi1BEpthW2I1NrFOTXFrMs6zNs62A1TaFNairE2BZmwqYUwU1uIhmsNpfCasOB1tOLXcR81fxZQgtADJWhrq1AecA7YWv2HpwK5wKLgmtOtMcsfk3tlb6E5IcB0StBqPWaSd6RymBhKySHpcy8zjfZVoHEhcxZ7dLF9x5p6J5Tew6upWEOcR/WR9bD8j9VrU6XcFsZIKxvY8b2Pa4e5ZNKqSTKFklxka0n/ABIbxHWAU71k2Pa31ZJI/cCE9M8pXWlUZLS1oq5zWje4ho7Sqa/Zdsgdxmlf8XFQFsscZqxrL29kPK7SB8VfRylaDKrD5O/MdmhaXNP+fBg63KVZpNrbO38NJZiOJFxh6nqnmzi2Rxk9LzT3D6qutGUZpcHPIb6LOSPqetTYXZdC+1wWa9d5cp+8bxfI7oc86hjq2bAqPKFufOeVg3Ywfd4neVqMasgCmtNd8KxOs63HFQcU1mYhXvs6wPs6sisTmq8nC0QrHQLG6JWLmLE6NWJcZaBiUDEt8xqBjV1NaWjQtzRoV01vtCkAkCmCuD1JIQiqLp3k7yxkpFyHJm0ilpFqlyV9aObc0qYlWjfSMiHyN/SBF8LQ0iNKi/I36hGC0NMlpkw+SFhgjBV+mRpkw+SFjeCNIFXaZGmVw+SFjpVEzLQ0qNImMz5W6ZVEyLUvp3kxifIzl6RKw1TUc5smSolCEY1EtUC1ZEijKF1ClVJaAHqQetQPUr6zxejk3L6V9aokT0iYa2Lyd5a+kTEiYay1QsWkRfTE1MqKRci8iCiVE6oqgVEqJ1RVURomGp1ReVQqIonVF5AAJpX0XlMZSTChfSvpgzIqsN9LSK4jPeSvrAZEr6cRnLlAvWEyKBkVxMbF5C1tIhXDAmhCOhhMIQimmhCgE0IUDCEIVAhCFEJCEIppIQjIQUIQJCEKkhJNCIiUk0KoSRQhUQKiUIVEUIQg/9k="></img>
        </header>
    );
}

export default Header;