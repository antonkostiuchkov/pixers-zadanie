# Zadanie Front-end
W ramach zadania kondydat powinien stworzyć stronę html z zaimplementowaną osługą formularza po stronie front-end'u.
Całość powinna zawierać walidację i integrację z częścią serwerową.

```html
<form method="POST" action="//api.test/auth">
    <fieldset>
        <label for="email">email</label>
        <input type="text" name="email" id="email">
        <label for="password">password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="login">
    </fieldset>
</form>
```

## Wymagania funkcjonalne
### Wymagania walidacji
- pola email i password nie mogą być puste
- wartość wprowadzona dla pola email powinna spełniać warunki poprawnego adresu email
- wartość pola password powinna składać się co najmniej z 6 znaków (w tym co najmniej 1 dużej litery, 1 małej i jednej cyfry )

### Wymagania integracji z serwerem
- dane z formularza powinny zostac wysłane przy pomocy requestu ajax, a jako format wysyłanych danych - JSON
- metoda wysłania formularza adekwatna do przypisanego atrybutu HTML
- adres hosta zgodny z atrybutem formularza

#### Obsługa odpowiedzi z serwera zgodnie ze specyfikacja statusów:
**Poprawne logowanie**
- wyświetlenie komunikatu: _"logowanie poprawne"_; ukrycie formularza

**Brak autentyfikacji ­**
- wyświetlenie komunikatu: _"niepoprawne login lub hasło"_

**Niepoprawne dane** (z wamagań walidacji)

- wyświetlenie komunikatu: _"niepoprawne dane"__

**Błąd usługi**
- wyświetlenie komunikatu: _"błąd usługi"_

#### wygląd formularza

- Sam formularz powinien być estyteczie zaprojektowany wykorzystjąc do tego możliwości HTML5/CSS3
- Cały arkusz stylów powinien wykorzystywać @media queries, aby na różnych rozdzielczościach formularz był równie funkcjonalny

## Wymagania niefunkcjonalne
- Zgodność ze standardem ~ECMASCRIPT 5 (na plus - ECMASCRIPT 6/2015 ), HTML5, CSS3
- Kodowanie UTF8
- Wspierane przegladarki IE9+, Firefox, Chrome (2 ostatnie stabilne wersje)
- Na plus: Testy jednostkowe dla dostarczonej implementacji
- Implementacja cześsci serwerowej nie jest w zakresie powyższego zadania
- Możliwosść wykorzystania frameworków aplikacyjnych np. Angular, Backbone, Ember etc.
