module Main exposing (main)

import Browser
import Html exposing (Html, li, main_, section, text, textarea, ul)
import Html.Attributes exposing (class, rows)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }



-- MODEL


type alias Model =
    { userState : String
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model ""
    , Cmd.none
    )



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    main_
        []
        [ section [ class "preview" ]
            [ textarea [ rows 4 ] [] ]
        , section [ class "keyboard" ] [ keyboard ]
        ]


keyboard : Html Msg
keyboard =
    ul [ class "rows" ]
        [ li [] [ row_1 ]
        , li [] [ row_2 ]
        , li [] [ row_3 ]
        , li [] [ row_4 ]
        , li [] [ row_5 ]
        ]


row_1 : Html Msg
row_1 =
    let
        keys =
            [ "`"
            , "1"
            , "2"
            , "3"
            , "4"
            , "5"
            , "6"
            , "7"
            , "8"
            , "9"
            , "0"
            , "["
            , "]"
            , "delete"
            ]

        keyTop key =
            li [] [ text key ]
    in
    ul [ class "keys", class "row-1" ] (keys |> List.map keyTop)


row_2 : Html Msg
row_2 =
    let
        keys =
            [ "tab"
            , "'"
            , ","
            , "."
            , "P"
            , "Y"
            , "F"
            , "G"
            , "C"
            , "R"
            , "L"
            , "/"
            , "="
            , "\\"
            ]

        keyTop key =
            li [] [ text key ]
    in
    ul [ class "keys", class "row-2" ]
        (keys |> List.map keyTop)


row_3 : Html Msg
row_3 =
    let
        keys =
            [ "caps lock"
            , "A"
            , "O"
            , "E"
            , "U"
            , "I"
            , "D"
            , "H"
            , "T"
            , "N"
            , "S"
            , "-"
            , "return"
            ]

        keyTop key =
            li [] [ text key ]
    in
    ul [ class "keys", class "row-3" ]
        (keys |> List.map keyTop)


row_4 : Html Msg
row_4 =
    let
        keys =
            [ "shift"
            , ";"
            , "Q"
            , "J"
            , "K"
            , "X"
            , "B"
            , "M"
            , "W"
            , "V"
            , "Z"
            , "shift"
            ]

        keyTop key =
            li [] [ text key ]
    in
    ul [ class "keys", class "row-4" ]
        (keys |> List.map keyTop)


row_5 : Html Msg
row_5 =
    let
        keys =
            [ "fn"
            , "control"
            , "option"
            , "command"
            , ""
            , "command"
            , "option"
            , "<"
            , "◇"
            , ">"
            ]

        keyTop key =
            li [] [ text key ]
    in
    ul [ class "keys", class "row-5" ]
        (keys |> List.map keyTop)
