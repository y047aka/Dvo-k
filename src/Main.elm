module Main exposing (main)

import Browser
import FullWidthConverter exposing (toAscii)
import Html exposing (Html, li, main_, section, text, textarea, ul)
import Html.Attributes exposing (class, rows, value)
import Html.Events exposing (onInput)


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
    , content : String
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model "" ""
    , Cmd.none
    )



-- UPDATE


type Msg
    = NoOp
    | UpdateContent String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        UpdateContent content ->
            Tuple.pair
                { model | content = content }
                Cmd.none


contentTail : String -> String
contentTail content =
    String.right 1 content
        |> String.toUpper
        |> toAscii



-- VIEW


view : Model -> Html Msg
view model =
    main_
        []
        [ section [ class "preview" ]
            [ textarea [ rows 4, onInput UpdateContent, value model.content ] [] ]
        , section [ class "keyboard" ] [ keyboard <| contentTail model.content ]
        ]


keyboard : String -> Html Msg
keyboard activeKey =
    ul [ class "rows" ]
        [ li [] [ row_1 activeKey ]
        , li [] [ row_2 activeKey ]
        , li [] [ row_3 activeKey ]
        , li [] [ row_4 activeKey ]
        , li [] [ row_5 activeKey ]
        ]


keyTopClass : String -> String -> Html.Attribute msg
keyTopClass activeKey key =
    Html.Attributes.classList
        [ ( "active", key == activeKey ) ]


keyTopElement : String -> String -> Html msg
keyTopElement activeKey key =
    li [ keyTopClass key activeKey ] [ text key ]


row_1 : String -> Html Msg
row_1 activeKey =
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

        keyTop =
            keyTopElement activeKey
    in
    ul [ class "keys", class "row-1" ] (keys |> List.map keyTop)


row_2 : String -> Html Msg
row_2 activeKey =
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

        keyTop =
            keyTopElement activeKey
    in
    ul [ class "keys", class "row-2" ]
        (keys |> List.map keyTop)


row_3 : String -> Html Msg
row_3 activeKey =
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

        keyTop =
            keyTopElement activeKey
    in
    ul [ class "keys", class "row-3" ]
        (keys |> List.map keyTop)


row_4 : String -> Html Msg
row_4 activeKey =
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

        keyTop =
            keyTopElement activeKey
    in
    ul [ class "keys", class "row-4" ]
        (keys |> List.map keyTop)


row_5 : String -> Html Msg
row_5 activeKey =
    let
        keys =
            [ "fn"
            , "control"
            , "option"
            , "command"
            , " "
            , "command"
            , "option"
            , "<"
            , "◇"
            , ">"
            ]

        keyTop =
            keyTopElement activeKey
    in
    ul [ class "keys", class "row-5" ]
        (keys |> List.map keyTop)
