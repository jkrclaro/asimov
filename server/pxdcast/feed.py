class Feed:

    def parse(self, podcast_id):
        data = {
            '842818711': [
                {
                    'id': 'controlling-ai',
                    'name': 'Controlling AI',
                    'uploaded_at': 'January 16',
                    'duration': '26 mins',
                    'url': 'https://cdn.simplecast.com/audio/3f86df/3f86df7b-51c6-4101-88a2-550dba782de8/7370b507-ab47-4768-b172-39751f869f5a/controllingai-russsellchen_tc.mp3',
                },
                {
                    'id': 'food-drugs-and-tech—100-years-of-public-health',
                    'name': 'Food, Drugs, and Tech—100 Years of Public Health',
                    'uploaded_at': 'January 14',
                    'duration': '32 mins',
                    'url': 'https://cdn.simplecast.com/audio/3f86df/3f86df7b-51c6-4101-88a2-550dba782de8/0e04b158-d439-4620-bfd9-be9660372483/2020-01-09-summit2019-abernathy-pande-v1-sm_tc.mp3',
                },
                {
                    'id': 'on-pharma-trends-and-big-company-innovation',
                    'name': 'On Pharma Trends and Big Company Innovation',
                    'uploaded_at': 'January 11',
                    'duration': '59 mins',
                    'url': 'https://cdn.simplecast.com/audio/3f86df/3f86df7b-51c6-4101-88a2-550dba782de8/a60ad0ae-6b02-4af6-b323-d57482364501/2020-01-10-rerun-novartis-sm_tc.mp3',
                }
            ],
            '1019576853': [
                {
                    'id': 'apollo-graphql-with-geoff-schmidt',
                    'name': 'Apollo GraphQL with Geoff Schmidt',
                    'uploaded_at': 'January 17',
                    'duration': '1h 9m',
                    'url': 'http://traffic.libsyn.com/sedaily/2020_01_17_Apollo.mp3'
                },
                {
                    'id': 'js-party-with-kevin-ball',
                    'name': 'JS Party with Kevin Ball',
                    'uploaded_at': 'January 16',
                    'duration': '1h 4m',
                    'url': 'http://traffic.libsyn.com/sedaily/2020_01_16_JSParty.mp3',
                },
                {
                    'id': 'packet-baremetal-infrastructure-with-zachary-smith-and-nathan-goulding',
                    'name': 'Packet: Baremetal Infrastructure with Zachary Smith and Nathan Goulding',
                    'uploaded_at': 'January 15',
                    'duration': '53 mins',
                    'url': 'http://traffic.libsyn.com/sedaily/2020_01_15_PacketInfrastructure.mp3',
                },
                {
                    'id': 'edge-computing-platform-with-jaromir-coufal',
                    'name': 'Edge Computing Platform with Jaromir Coufal',
                    'uploaded_at': 'January 14',
                    'duration': '53 mins',
                    'url': 'http://traffic.libsyn.com/sedaily/2020_01_14_RedHatEdge.mp3',
                }
            ]
        }

        episodes = data[podcast_id]
        return episodes
